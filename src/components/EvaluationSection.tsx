
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface EvaluationSectionProps {
  onComplete: () => void;
}

// Photos d'exemple (normalement viendraient de la base de données)
const mockProfiles = [
  {
    id: 1,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    name: "Sarah"
  },
  {
    id: 2,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Thomas"
  },
  {
    id: 3,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    name: "Emma"
  },
  {
    id: 4,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    name: "Lucas"
  },
  {
    id: 5,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    name: "Marie"
  }
];

const EvaluationSection = ({ onComplete }: EvaluationSectionProps) => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [estimatedAge, setEstimatedAge] = useState('');
  const [evaluations, setEvaluations] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const { toast } = useToast();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleEvaluation = () => {
    if (!estimatedAge) {
      toast({
        title: "Âge requis",
        description: "Veuillez estimer l'âge de cette personne",
        variant: "destructive"
      });
      return;
    }

    const age = parseInt(estimatedAge);
    if (age < 10 || age > 90) {
      toast({
        title: "Âge invalide",
        description: "Veuillez entrer un âge entre 10 et 90 ans",
        variant: "destructive"
      });
      return;
    }

    const newEvaluations = [...evaluations, age];
    setEvaluations(newEvaluations);
    setEstimatedAge('');
    setTimeLeft(30);

    if (currentProfile < mockProfiles.length - 1) {
      setCurrentProfile(currentProfile + 1);
      toast({
        title: "Évaluation enregistrée !",
        description: `Plus que ${mockProfiles.length - currentProfile - 1} évaluations`
      });
    } else {
      toast({
        title: "Toutes les évaluations terminées !",
        description: "Découvrez maintenant vos résultats"
      });
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const currentProfileData = mockProfiles[currentProfile];
  const progress = ((currentProfile + 1) / mockProfiles.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header avec progression */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Évaluation {currentProfile + 1}/5
            </h2>
          </div>
          <Progress value={progress} className="h-3 mb-4" />
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Temps recommandé: {timeLeft}s</span>
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            {/* Photo de profil */}
            <div className="relative">
              <img 
                src={currentProfileData.photo} 
                alt={`Profil de ${currentProfileData.name}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Zone d'évaluation */}
            <div className="p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Quel âge a {currentProfileData.name} ?
                </h3>
                <p className="text-gray-600">
                  Donnez votre meilleure estimation
                </p>
              </div>

              <div className="space-y-4">
                <Label htmlFor="age-input" className="text-lg font-medium text-gray-700">
                  Âge estimé
                </Label>
                <div className="flex gap-4">
                  <Input
                    id="age-input"
                    type="number"
                    min="10"
                    max="90"
                    placeholder="Ex: 28"
                    value={estimatedAge}
                    onChange={(e) => setEstimatedAge(e.target.value)}
                    className="text-center text-2xl font-bold py-6 border-gray-200 focus:border-purple-400 focus:ring-purple-400"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleEvaluation();
                      }
                    }}
                    autoFocus
                  />
                  <span className="flex items-center text-xl text-gray-500 font-medium">
                    ans
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleEvaluation}
                className="w-full py-6 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                disabled={!estimatedAge}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                {currentProfile < mockProfiles.length - 1 ? 'Suivant' : 'Terminer'}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Faites confiance à votre première impression !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils */}
        <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-lg p-4">
          <h4 className="font-medium text-gray-800 mb-2">💡 Conseils</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Fiez-vous à votre première impression</li>
            <li>• Observez les traits du visage, la peau, les cheveux</li>
            <li>• Ne sur-analysez pas, restez spontané</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EvaluationSection;

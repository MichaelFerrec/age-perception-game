
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Target, RotateCcw, Share2, Calendar, Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ResultsSectionProps {
  onBack: () => void;
}

const ResultsSection = ({ onBack }: ResultsSectionProps) => {
  const [realAge] = useState(28); // Normalement récupéré du profil utilisateur
  const [estimatedAges] = useState([25, 30, 27, 26, 29]); // Normalement récupéré de la DB
  const { toast } = useToast();

  const averageEstimatedAge = Math.round(estimatedAges.reduce((sum, age) => sum + age, 0) / estimatedAges.length);
  const difference = averageEstimatedAge - realAge;
  const accuracyPercentage = Math.max(0, 100 - Math.abs(difference) * 10);

  const handleShare = () => {
    const shareText = `Je parais ${averageEstimatedAge} ans alors que j'en ai ${realAge} ! Et vous, quel âge faites-vous vraiment ? Découvrez-le sur AgeGuess !`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mon résultat AgeGuess',
        text: shareText,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.origin);
      toast({
        title: "Lien copié !",
        description: "Le lien a été copié dans votre presse-papiers"
      });
    }
  };

  const getResultMessage = () => {
    if (Math.abs(difference) <= 2) {
      return {
        title: "🎯 Vous paraissez votre âge !",
        description: "Les gens devinent votre âge avec une précision remarquable",
        color: "text-green-600"
      };
    } else if (difference < 0) {
      return {
        title: "✨ Vous paraissez plus jeune !",
        description: `Vous avez l'air d'avoir ${Math.abs(difference)} an${Math.abs(difference) > 1 ? 's' : ''} de moins`,
        color: "text-blue-600"
      };
    } else {
      return {
        title: "🎭 Vous paraissez plus mature !",
        description: `Vous avez l'air d'avoir ${difference} an${difference > 1 ? 's' : ''} de plus`,
        color: "text-purple-600"
      };
    }
  };

  const result = getResultMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Vos résultats
          </h1>
          <p className="text-gray-600 text-lg">
            Découvrez comment les autres perçoivent votre âge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Résultat principal */}
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className={`text-3xl ${result.color} mb-2`}>
                {result.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {result.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Comparaison des âges */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Votre âge réel</p>
                    <p className="text-3xl font-bold text-gray-800">{realAge}</p>
                    <p className="text-xs text-gray-400">ans</p>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    {difference === 0 ? (
                      <Target className="w-8 h-8 text-green-500" />
                    ) : difference < 0 ? (
                      <TrendingDown className="w-8 h-8 text-blue-500" />
                    ) : (
                      <TrendingUp className="w-8 h-8 text-purple-500" />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Âge perçu</p>
                    <p className="text-3xl font-bold text-purple-600">{averageEstimatedAge}</p>
                    <p className="text-xs text-gray-400">ans</p>
                  </div>
                </div>
              </div>

              {/* Précision */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Précision des évaluations</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {accuracyPercentage}%
                  </Badge>
                </div>
                <Progress value={accuracyPercentage} className="h-3" />
              </div>

              {/* Statistiques détaillées */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">{estimatedAges.length}</p>
                  <p className="text-sm text-blue-700">Évaluations</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">
                    {Math.min(...estimatedAges)}-{Math.max(...estimatedAges)}
                  </p>
                  <p className="text-sm text-green-700">Fourchette</p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <Button 
                  onClick={handleShare}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager mes résultats
                </Button>
                
                <Button 
                  onClick={onBack}
                  variant="outline" 
                  className="w-full py-3 border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Faire 5 nouvelles évaluations
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Détails des évaluations */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Détail des évaluations</CardTitle>
                <CardDescription>Ce que chaque personne a pensé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {estimatedAges.map((age, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Évaluation #{index + 1}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{age} ans</span>
                        {age < realAge && <TrendingDown className="w-4 h-4 text-blue-500" />}
                        {age > realAge && <TrendingUp className="w-4 h-4 text-purple-500" />}
                        {age === realAge && <Target className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conseils */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">💡 Le saviez-vous ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-purple-700 text-sm">
                  • Les expressions faciales peuvent influencer la perception de l'âge
                </p>
                <p className="text-purple-700 text-sm">
                  • Un sourire naturel peut vous faire paraître plus jeune
                </p>
                <p className="text-purple-700 text-sm">
                  • L'éclairage de votre photo joue un rôle important
                </p>
                <p className="text-purple-700 text-sm">
                  • Plus vous participez, plus vos résultats sont précis !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action pour continuer */}
        <div className="text-center mt-12 p-8 bg-white/70 backdrop-blur-sm rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Continuez l'expérience !
          </h3>
          <p className="text-gray-600 mb-6">
            Plus vous évaluez d'autres profils, plus vos propres résultats deviennent précis
          </p>
          <Button 
            onClick={onBack}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 text-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Évaluer 5 nouvelles personnes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;

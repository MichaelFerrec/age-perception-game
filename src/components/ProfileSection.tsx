
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload, User, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ProfileSectionProps {
  onNext: () => void;
}

const ProfileSection = ({ onNext }: ProfileSectionProps) => {
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!age || !photo) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez ajouter votre âge et une photo",
        variant: "destructive"
      });
      return;
    }

    if (parseInt(age) < 16 || parseInt(age) > 99) {
      toast({
        title: "Âge invalide",
        description: "Vous devez avoir entre 16 et 99 ans",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Profil créé !",
      description: "Vous pouvez maintenant commencer les évaluations"
    });
    
    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Créer mon profil
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Ajoutez vos informations pour commencer l'expérience
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload */}
              <div className="space-y-4">
                <Label className="text-gray-700 font-medium text-lg">Photo de profil *</Label>
                <div className="flex flex-col items-center space-y-4">
                  {photo ? (
                    <div className="relative">
                      <img 
                        src={photo} 
                        alt="Photo de profil" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0"
                        onClick={() => setPhoto(null)}
                      >
                        ✕
                      </Button>
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center space-y-2">
                    <Label htmlFor="photo-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                        <Upload className="w-4 h-4 mr-2" />
                        {photo ? 'Changer la photo' : 'Ajouter une photo'}
                      </Button>
                    </Label>
                    <Input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <p className="text-xs text-gray-500 text-center">
                      Photo claire du visage recommandée.<br/>
                      Formats acceptés: JPG, PNG (max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-gray-700 font-medium text-lg">Votre âge réel *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="age"
                    type="number"
                    min="16"
                    max="99"
                    placeholder="Ex: 25"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="pl-10 py-6 text-lg border-gray-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Cette information restera privée et ne sera jamais montrée aux autres utilisateurs
                </p>
              </div>

              {/* Bio optionnelle */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-gray-700 font-medium text-lg">Bio (optionnel)</Label>
                <Textarea
                  id="bio"
                  placeholder="Quelques mots sur vous... (facultatif)"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="min-h-20 text-lg border-gray-200 focus:border-purple-400 focus:ring-purple-400"
                  maxLength={150}
                />
                <p className="text-sm text-gray-500">{bio.length}/150 caractères</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                <h4 className="font-medium text-blue-800">🔒 Confidentialité et sécurité</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Votre âge réel ne sera jamais révélé aux autres utilisateurs</li>
                  <li>• Vos photos sont modérées pour assurer un environnement respectueux</li>
                  <li>• Vous pouvez supprimer votre compte à tout moment</li>
                  <li>• Toutes vos données sont protégées selon le RGPD</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                Commencer l'expérience !
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;

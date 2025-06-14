
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Eye, TrendingUp, Shield, Sparkles, Heart } from 'lucide-react';
import AuthSection from '@/components/AuthSection';
import EvaluationSection from '@/components/EvaluationSection';
import ProfileSection from '@/components/ProfileSection';
import ResultsSection from '@/components/ResultsSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'landing' | 'auth' | 'profile' | 'evaluation' | 'results'>('landing');
  
  if (currentSection === 'auth') {
    return <AuthSection onBack={() => setCurrentSection('landing')} onSuccess={() => setCurrentSection('profile')} />;
  }
  
  if (currentSection === 'profile') {
    return <ProfileSection onNext={() => setCurrentSection('evaluation')} />;
  }
  
  if (currentSection === 'evaluation') {
    return <EvaluationSection onComplete={() => setCurrentSection('results')} />;
  }
  
  if (currentSection === 'results') {
    return <ResultsSection onBack={() => setCurrentSection('evaluation')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              AgeGuess
            </h1>
          </div>
          <Button 
            onClick={() => setCurrentSection('auth')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Commencer
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
            <Sparkles className="w-4 h-4 mr-1" />
            Nouveau concept social
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Quel âge fais-tu vraiment ?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvre comment les autres perçoivent ton âge ! Une expérience sociale unique qui révèle l'écart entre ton âge réel et ton apparence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => setCurrentSection('auth')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6"
            >
              <Heart className="w-5 h-5 mr-2" />
              Créer mon profil
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-200 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6"
            >
              <Eye className="w-5 h-5 mr-2" />
              Voir comment ça marche
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Évalue 5 personnes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                À chaque connexion, devine l'âge de 5 autres utilisateurs pour débloquer tes propres résultats.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Découvre ton score
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Vois l'âge moyen que les autres t'attribuent et compare avec ton âge réel.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                100% sécurisé
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Tes données sont protégées. Supprime ton compte à tout moment.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm rounded-3xl my-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Comment ça marche ?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
              <h4 className="font-semibold text-lg mb-2">Crée ton profil</h4>
              <p className="text-gray-600 text-sm">Ajoute ta photo et ton âge réel</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
              <h4 className="font-semibold text-lg mb-2">Évalue les autres</h4>
              <p className="text-gray-600 text-sm">Devine l'âge de 5 personnes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
              <h4 className="font-semibold text-lg mb-2">Découvre tes résultats</h4>
              <p className="text-gray-600 text-sm">Vois ton âge perçu par les autres</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
              <h4 className="font-semibold text-lg mb-2">Suis ton évolution</h4>
              <p className="text-gray-600 text-sm">Historique et graphiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p className="mb-4">© 2024 AgeGuess - Respect de la vie privée et RGPD</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-purple-600 transition-colors">Conditions d'utilisation</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

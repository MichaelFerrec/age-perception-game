import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Eye, TrendingUp, Shield, Sparkles, Heart, Star, Zap, Trophy, Camera, ArrowRight, Play } from 'lucide-react';
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              <Play className="w-5 h-5 mr-2" />
              Voir la démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10k+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50k+</div>
              <div className="text-gray-600">Évaluations réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Pourquoi AgeGuess ?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience sociale innovante qui révèle comment vous êtes perçu par les autres
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Communauté active
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Rejoignez une communauté bienveillante qui participe à cette expérience sociale unique.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Insights personnalisés
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Obtenez des analyses détaillées sur la perception de votre âge avec des graphiques et tendances.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Sécurité totale
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Vos données sont protégées et vous gardez le contrôle total sur votre profil et vos informations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm rounded-3xl my-16">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Ce que disent nos utilisateurs
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/90">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "J'ai découvert que je fais 3 ans de moins que mon âge ! Cette app est addictive et très bien faite."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold">Marie, 28 ans</p>
                  <p className="text-sm text-gray-500">Paris</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Concept génial ! C'est marrant de voir comment les gens nous perçoivent. Interface très intuitive."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-semibold">Julien, 35 ans</p>
                  <p className="text-sm text-gray-500">Lyon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Parfait pour booster la confiance en soi ! Les graphiques sont très bien pensés."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold">Sophie, 42 ans</p>
                  <p className="text-sm text-gray-500">Bordeaux</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Comment ça marche ?
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            4 étapes simples pour découvrir votre âge perçu
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Créez votre profil</h4>
              <p className="text-gray-600 text-sm">Ajoutez votre photo et votre âge réel en toute sécurité</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Évaluez 5 personnes</h4>
              <p className="text-gray-600 text-sm">Estimez l'âge d'autres utilisateurs de façon anonyme</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Découvrez vos résultats</h4>
              <p className="text-gray-600 text-sm">Voyez l'âge moyen que vous donnent les autres</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Suivez votre évolution</h4>
              <p className="text-gray-600 text-sm">Analysez vos tendances avec des graphiques détaillés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-6">
            Prêt à découvrir votre âge perçu ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs qui ont déjà tenté l'expérience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setCurrentSection('auth')}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Zap className="w-5 h-5 mr-2" />
              Commencer maintenant
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Eye className="w-5 h-5 mr-2" />
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            AgeGuess
          </span>
        </div>
        
        <p className="mb-6 text-gray-600">
          L'expérience sociale qui révèle votre âge perçu
        </p>
        
        <div className="flex justify-center gap-8 text-sm mb-6">
          <a href="#" className="hover:text-purple-600 transition-colors">À propos</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Conditions d'utilisation</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Support</a>
        </div>
        
        <p className="text-sm">© 2024 AgeGuess - Tous droits réservés - Conformité RGPD</p>
      </footer>
    </div>
  );
};

export default Index;

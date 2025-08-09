import {
  Users,
  Shield,
  Target,
  Zap,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Om Lorik Myftari
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En engagerad och talangfull ung målvakt med stark vilja att
            utvecklas och nå framgång på elitnivå inom fotbollen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">
              Spelar över sin åldersklass
            </h3>
            <p className="text-gray-600">
              Endast 15 år gammal har Lorik etablerat sig i IFK Göteborgs
              U16-lag, där han visar prov på mognad och exceptionell
              skicklighet.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Målvakt i IFK Göteborg</h3>
            <p className="text-gray-600">
              Som målvakt för IFK:s U16-lag visar Lorik konstant sina
              räddningsfärdigheter och ledarskap på planen.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Framtidsmål</h3>
            <p className="text-gray-600">
              Med en dröm om att bli professionell fotbollsspelare tränar Lorik
              målmedvetet varje dag för att nå den högsta nivån inom sporten.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Fakta om Lorik
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">Snabba reflexer</div>
              <div className="text-sm text-gray-600">
                Exceptionellt snabba reflexer som gör skillnad i avgörande
                ögonblick
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">Snabb utveckling</div>
              <div className="text-sm text-gray-600">
                Lyckades reducera insläppta mål genom effektivt målvaktsspel{" "}
              </div>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <Award className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">
                Utmärkt träningsdisciplin
              </div>
              <div className="text-sm text-gray-600">
                Visar stort engagemang och disciplin i varje träning{" "}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">Passionerad</div>
              <div className="text-sm text-gray-600">
                Brinner för fotboll och lagarbete
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

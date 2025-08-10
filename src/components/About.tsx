import {
  Users,
  Shield,
  Target,
  Zap,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("aboutDetails.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("aboutDetails.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">
              {t("aboutDetails.cards.playerOverAge")}
            </h3>
            <p className="text-gray-600">
              {t("aboutDetails.cards.playerOverAgeDesc")}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">
              {t("aboutDetails.cards.goalkeeper")}
            </h3>
            <p className="text-gray-600">
              {t("aboutDetails.cards.goalkeeperDesc")}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">
              {t("aboutDetails.cards.futureGoals")}
            </h3>
            <p className="text-gray-600">
              {t("aboutDetails.cards.futureGoalsDesc")}
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            {t("aboutDetails.funFacts.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">
                {t("aboutDetails.funFacts.reflexes.title")}
              </div>
              <div className="text-sm text-gray-600">
                {t("aboutDetails.funFacts.reflexes.desc")}
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">
                {t("aboutDetails.funFacts.development.title")}
              </div>
              <div className="text-sm text-gray-600">
                {t("aboutDetails.funFacts.development.desc")}
              </div>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <Award className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">
                {t("aboutDetails.funFacts.training.title")}
              </div>
              <div className="text-sm text-gray-600">
                {t("aboutDetails.funFacts.training.desc")}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="font-bold text-gray-900">
                {t("aboutDetails.funFacts.passion.title")}
              </div>
              <div className="text-sm text-gray-600">
                {t("aboutDetails.funFacts.passion.desc")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar, Trophy, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Highlights() {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("highlights.title", "Karriärhöjdpunkter")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("highlights.subtitle", "Viktiga milstolpar i fotbollsresan")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-10 sm:top-0 transform -translate-x-1/2 bg-blue-200 w-[1px] h-[80%] sm:h-full sm:w-1"></div>

          <div className="space-y-12">
            {/* Milstolpe 1 */}
            <div className="relative flex flex-col sm:flex-row items-center">
              <div className="flex-1 sm:text-right sm:pr-8 px-4 py-3 max-w-xs sm:max-w-none">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-end mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      {t("highlights.milestones.0.period", "2016–2023")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(
                      "highlights.milestones.0.title",
                      "Spelade i Angered MBIK"
                    )}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      "highlights.milestones.0.description",
                      "Startade fotbollskarriären vid 6 års ålder."
                    )}
                  </p>
                  <div className="mt-3 flex items-center justify-end text-sm text-green-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>
                      {t(
                        "highlights.milestones.0.tag",
                        "Karriärstart & Utveckling"
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto w-5 h-5 bg-blue-600 rounded-full"></div>
              <div className="flex-1 sm:pl-8"></div>
            </div>

            {/* Milstolpe 2 */}
            <div className="relative flex flex-col sm:flex-row items-center">
              <div className="flex-1 sm:pr-8"></div>
              <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto w-5 h-5 bg-blue-600 rounded-full"></div>
              <div className="flex-1 sm:pl-8 px-4 py-3 max-w-xs sm:max-w-none">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      {t("highlights.milestones.1.period", "2023 (6 månader)")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t("highlights.milestones.1.title", "Spelade i Skottsfint")}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      "highlights.milestones.1.description",
                      "Tillbringade sex månader i klubben och utvecklade målvaktsegenskaperna."
                    )}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-purple-600">
                    <Target className="h-4 w-4 mr-1" />
                    <span>
                      {t("highlights.milestones.1.tag", "Personlig utveckling")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milstolpe 3 */}
            <div className="relative flex flex-col sm:flex-row items-center">
              <div className="flex-1 sm:text-right sm:pr-8 px-4 py-3 max-w-xs sm:max-w-none">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-end mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      {t("highlights.milestones.2.period", "2024")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t("highlights.milestones.2.title", "Spelade i GAIS")}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      "highlights.milestones.2.description",
                      "Tillbringade ett år i GAIS och vässade färdigheterna."
                    )}
                  </p>
                  <div className="mt-3 flex items-center justify-end text-sm text-orange-600">
                    <Trophy className="h-4 w-4 mr-1" />
                    <span>
                      {t("highlights.milestones.2.tag", "Erfarenhet")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto w-5 h-5 bg-blue-600 rounded-full"></div>
              <div className="flex-1 sm:pl-8"></div>
            </div>

            {/* Milstolpe 4 */}
            <div className="relative flex flex-col sm:flex-row items-center">
              <div className="flex-1 sm:pr-8"></div>
              <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto w-5 h-5 bg-blue-600 rounded-full"></div>
              <div className="flex-1 sm:pl-8 px-4 py-3 max-w-xs sm:max-w-none">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      {t("highlights.milestones.3.period", "2025–2026")}{" "}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(
                      "highlights.milestones.3.title",
                      "Började i IFK Göteborg U16"
                    )}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      "highlights.milestones.3.description",
                      "Inledde rollen som målvakt i IFK Göteborgs ungdomslag."
                    )}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-green-600">
                    <Trophy className="h-4 w-4 mr-1" />
                    <span>
                      {t("highlights.milestones.3.tag", "Ny milstolpe")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milstolpe 5 */}
            <div className="relative flex flex-col sm:flex-row items-center">
              <div className="flex-1 sm:text-right sm:pr-8 px-4 py-3 max-w-xs sm:max-w-none">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-end mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-600">
                      {t("highlights.milestones.4.period", "2026–")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(
                      "highlights.milestones.4.title",
                      "Började i Önnereds IK"
                    )}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      "highlights.milestones.4.description",
                      "Inledde sin nya resa som målvakt i Önnereds IK."
                    )}
                  </p>
                  <div className="mt-3 flex items-center justify-end text-sm text-purple-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{t("highlights.milestones.4.tag", "Ny klubb")}</span>
                  </div>
                </div>
              </div>
              <div className="absolute sm:relative left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto w-5 h-5 bg-blue-600 rounded-full"></div>
              <div className="flex-1 sm:pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

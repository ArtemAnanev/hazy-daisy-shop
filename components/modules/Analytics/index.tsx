import GoogleAnalytics from "@/components/modules/Analytics/GoogleAnalytics/GoogleAnalytics";
import YandexMetrika from "@/components/modules/Analytics/YandexMetrika/YandexMetrika";

export const AnalyticScripts = () => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALITICS_ID;
  const ymId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

  return (
    <>
      {Boolean(gaId) && <GoogleAnalytics id={gaId || ''} />}
      {Boolean(ymId) && <YandexMetrika id={ymId || ''} />}
    </>
  )
}

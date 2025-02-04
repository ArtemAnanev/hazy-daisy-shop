import GoogleAnalytics from "@/components/modules/Analytics/GoogleAnalytics/GoogleAnalytics";

export const AnalyticScripts = () => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALITICS_ID;

  return <>{Boolean(gaId) && <GoogleAnalytics id={gaId || ''} />}</>
}

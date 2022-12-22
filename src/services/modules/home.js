import Request from "@/services/index"
export function getHomeGoodPriceData() {
  return Request.get({
    url:'/home/goodprice'
  })
}
export function getHomeHighScoreData() {
  return Request.get({
    url:'/home/highscore'
  })
}
export function getHomeDiscountData() {
  return Request.get({
    url:'/home/discount'
  })
}
export function getHomeRecommendData() {
  return Request.get({
    url:'/home/hotrecommenddest'
  })
}
export function getHomeLongforData() {
  return Request.get({
    url:'/home/longfor'
  })
}
export function getHomePlusData() {
  return Request.get({
    url:'/home/plus'
  })
}
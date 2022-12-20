import Request from "@/services/index"
export function getHomeGoodPriceData() {
  return Request.get({
    url:'/home/goodprice'
  })
}
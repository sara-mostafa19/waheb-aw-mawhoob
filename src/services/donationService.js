import { mockDonations } from "../data/mockDonations";

export const getDonations = () => {
return new Promise((resolve)=>{
setTimeout(()=>{
resolve(mockDonations)
},500)
})
}

export const getDonationById = (id)=>{
return new Promise((resolve)=>{
setTimeout(()=>{
resolve(mockDonations.find(d=>d.id==id))
},300)
})
}
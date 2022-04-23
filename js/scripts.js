let d = new Date()
let mDate = document.lastModified

nCopyDate = `© ${d.getFullYear()} | Trevor C. Jones | South Carolina`
nLastModify = `Last Modified : ${mDate}`

document.querySelector('.aCRight').textContent = nCopyDate
document.querySelector(".aLModify").textContent = nLastModify
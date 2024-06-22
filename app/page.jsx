'use client'
import { projects } from ".//imageData.js"
import ImageSlider from "./Components/ImageSlider";

export default function Home() {
const images = projects[1].photos
let allPhotos = []
projects.forEach((project) => {
  allPhotos = allPhotos.concat(project.photos)
})
const photos = projects[1].photos.concat(projects[2].photos)
console.log(allPhotos)
console.log("from page",images)
  return (
    <div style={{
      maxWidth: "1200px",
      width: "100%",
      aspectRatio: "10 / 6",
      margin: "0 auto",
    }}>
      <ImageSlider imageUrls={photos}/>
    </div>

  );
}

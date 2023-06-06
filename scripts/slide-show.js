// !Khi click các thumbnails bên dưới thì hình cover sẽ đổi
// Thumbnail: .thumbnail
// Cover: #cover
// Cách lấy hình (hoặc gán hình) từ <img src />: <image>.src trong đó <image> là Element được select từ document.....
// 1. Select hết các element cần thiết (thumbnail, cover)
// 2. Loop thumbnails và addEventListener vào từng thumbnail với hành động lấy src từ thumbnail gán vào src của cover
const mainCover = document.getElementById("main-cover")
const thumbnail = document.getElementsByClassName("thumbnail")
for (let index = 0; index < thumbnail.length; index++) {
	thumbnail[index].addEventListener("click", function () {
		mainCover.src = thumbnail[index].src
	})
}

const overlay = $(".overlay");

$(document).ready(function () {
  $(".offset_gallery_item").on("click", function () {
    overlay.addClass("active");
    const $this = $(this);

    let imagesHtml = "";
    $this.find(".offset_gallery_images img").each(function () {
      const src = $(this).attr("src");
      imagesHtml += `
        <div class="swiper-slide">
          <img src="${src}" />
        </div>
      `;
    });

    $(".offset_gallery_modal .offset_gallery_modal_swiper_2 .swiper-wrapper").html(imagesHtml);
    $(".offset_gallery_modal .offset_gallery_modal_swiper .swiper-wrapper").html(imagesHtml);

    $(".offset_gallery_modal").addClass("active");

    if (typeof galleryThumbs2 !== "undefined") galleryThumbs2.update();
    if (typeof galleryThumbs !== "undefined") galleryThumbs.update();
  });
});

$(".offset_gallery_close").click(function () {
  overlay.removeClass("active");
  $(".offset_gallery_modal").removeClass("active");
});

$(".nav_burger").click(function () {
  overlay.addClass("active");
  $(".burger_menu").addClass("active");
});
$(".burger_close").click(function () {
  overlay.removeClass("active");
  $(".burger_menu").removeClass("active");
});

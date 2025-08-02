import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements AfterViewInit {
  public images: any = [
    { id: 1, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/714bpf-4phl-32d3.webp?resolution=1500_1500" },
    { id: 2, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/61rczew36wl-84110.webp?resolution=1500_1500" },
    { id: 3, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71hcdznx6bl-1072b.webp?resolution=1500_1500" },
    { id: 4, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81rdmnqn3xl-fe10b.webp?resolution=1500_1500" },
    { id: 5, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71dvnn-wd6l-92de.webp?resolution=1500_1500" },
    { id: 6, link: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/61rczew36wl-84110.webp?resolution=1500_1500" },
  ];
  public showMore = false;
  public text = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi totam voluptate eligendi
                debitis porro quam impedit saepe corrupti, repellendus deserunt praesentium, asperiores doloribus iure
                consectetur, ipsum alias? Temporibus numquam veritatis omnis facere dicta doloribus sapiente vero,
                consequatur itaque quasi suscipit minus fuga tempore quidem nostrum delectus nam impedit excepturi
                consectetur deleniti ratione quam? Dolorum repudiandae officia neque eligendi nam ex, cumque excepturi
                placeat quaerat nobis ipsum maiores deleniti odio qui, error laudantium distinctio fugit veniam natus
                illo, harum labore. Adipisci nulla optio accusamus. Amet totam consequatur fuga. Cupiditate corporis a
                officia similique ex placeat nisi ab id sit, doloribus, expedita molestiae numquam minima culpa quae,
                autem quasi. Magnam suscipit nostrum ab! Quibusdam necessitatibus ex, recusandae at sunt reiciendis vero
                vel eveniet placeat aut illo expedita voluptas deserunt exercitationem reprehenderit vitae debitis
                officiis officia, aspernatur ad nobis neque laboriosam mollitia voluptate. Omnis, dolore nostrum
                cupiditate sequi aliquam laudantium quis commodi! Dolor quae aperiam non, aut quo deleniti cum omnis.
                Architecto cupiditate aliquam deserunt a, unde, sequi inventore ratione, atque mollitia quisquam quas!
                Ipsa a nihil numquam ab eaque nam quis consequuntur, deserunt impedit omnis placeat rerum quaerat aut
                delectus voluptates sit, ipsam qui voluptatem quos est natus? Vero molestiae nisi reprehenderit amet
                fuga quam consequuntur libero quas, pariatur fugit eius, ipsum laudantium rem similique incidunt vel.
                Fugit nihil fugiat aperiam et molestiae nam id iure laboriosam rerum officiis cum alias inventore,
                dolor, error unde dignissimos placeat doloremque aspernatur, cupiditate quod earum. Enim necessitatibus
                quo quisquam similique voluptatum eos inventore, perferendis dolor dignissimos nihil vitae quam,
                perspiciatis aperiam voluptatibus id pariatur sapiente aliquid odio natus, minus adipisci libero labore
                eveniet. Temporibus fugiat in rem nostrum, doloremque minima accusamus hic expedita impedit, similique
                sint deserunt optio maiores odit quasi delectus suscipit ipsa eligendi ducimus exercitationem nobis
                corporis! Totam, eveniet voluptates illo pariatur dolor, recusandae, et laudantium asperiores architecto
                magnam sapiente enim repellat vitae necessitatibus reprehenderit quam hic minima ut in velit corrupti.
                Expedita, reiciendis asperiores optio vitae soluta tenetur omnis illum perferendis inventore, doloribus
                non amet rerum quisquam, adipisci nostrum eveniet ducimus id iste voluptatum atque voluptas molestiae
                explicabo. Amet, iure! Ducimus numquam distinctio, minima, veniam esse, adipisci et dolorum ut tempore
                at velit voluptatum. Aspernatur aliquam, qui tenetur maiores optio vitae soluta minus cumque illo ullam
                eius facilis magni adipisci animi suscipit reiciendis in expedita quidem ratione eum voluptas,
                laudantium earum quod! Fuga assumenda suscipit odio illum, neque cumque laborum nostrum delectus
                dolorum, deserunt eos non! Eos voluptatum rem debitis voluptatibus vel? Dolorem odit rerum vitae, nisi
                suscipit repudiandae! Iusto quis ratione, molestias excepturi mollitia consequatur deleniti perspiciatis
                enim. Sunt deserunt beatae repudiandae voluptate architecto non porro mollitia tempora optio, quia
                maiores autem ipsum. Quaerat quia quidem odio animi dolor alias quod, natus sint possimus totam eos
                dolorem deleniti et maiores expedita. Impedit eveniet adipisci voluptates magnam recusandae nam
                molestias est vitae fuga asperiores quam nostrum maiores voluptas excepturi provident aperiam, tenetur
                sequi neque laboriosam accusantium enim nulla voluptatibus! Adipisci, eum ea. Ratione consectetur
                assumenda odit officia autem tenetur! Perspiciatis, numquam?`;

  public cards: any[] = [
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },
    {
      name: "Urban Space 100% Cotton Dining Table Cover 4 Seater, Printed Cotton Table Cloth for Center Table, Table Cover with Tassels(Ikat, 4 Seater - 56\" x 72\")",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/71z-li1gf8l-3450.webp?auto=format&w=640",
      price: 2500,
    },




  ];
  public categoryCards: any[] = [
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },
    {
      name: "Home and Decore",
      imgLink: "https://cdn.saleecom.com/upload/images/687c89eb6b0076c2c759b12e/81jgskv9zpl-c58e.webp?resolution=1500_1500"
    },

  ];
  public addedToCart: boolean = false;
  public currentMainImage: string = this.images[0].link;
  public zoomEnabled: boolean = false;
  public zoomImageParameters: any = {
    ZoomContainerLeft: 0,
    ZoomContainerTop: 0,
    ZoomContainerHeight: 0,
    ZoomContainerWideth: 0,
    hoverBoxWidth: 0,
    hoverBoxHeight: 0,
    hoverBoxTop: 0,
    hoverBoxLeft: 0,
    mainImageWidth: 0,
    mainImageHeight: 0
  }


  @ViewChild('thumbnailWrapper', { static: false }) thumbnailWrapper: ElementRef;

  ngAfterViewInit() {


    // Register Swiper custom elements
    // register();

    // Initialize Swiper
    const swiperElcard = document.querySelector(`#card`) as SwiperContainer;
    if (!swiperElcard) return;
    const swiperParamscard: SwiperOptions = {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 5,
      speed: 600, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,

      navigation: {
        nextEl: `.first-card`,
        prevEl: `.last-card`,
      },
      breakpoints: {
        // 320: { slidesPerView: 2.5, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 5 },
        770: { slidesPerView: 4, spaceBetween: 5 },
        // 990: { slidesPerView: 4, spaceBetween: 5 },
        1200: { slidesPerView: 5, spaceBetween: 5 }
      },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperElcard, swiperParamscard);

    // Initialize Swiper
    swiperElcard.initialize();
  }


  /**
   * changeMainImage()
   * scrollTop()
   * scrollDown()
   * changeCartButtonState()
   */
  public changeMainImage(newImage: string): void {
    this.currentMainImage = newImage; // Change the main image dynamically
  }
  public scrollTop(): void {
    this.thumbnailWrapper.nativeElement.scrollBy({
      top: -100, // Adjust based on the size of one thumbnail
      behavior: 'smooth',
    });
  }

  public scrollDown(): void {
    this.thumbnailWrapper.nativeElement.scrollBy({
      top: 100, // Adjust based on the size of one thumbnail
      behavior: 'smooth',
    });
  }
  public changeCartButtonState() {
    this.addedToCart = !this.addedToCart;
  }

  public zoomImage(event: MouseEvent): void {
    const mainImage = event.target as HTMLImageElement;
    // .product-image-section here ....
    const mainImageContainer = mainImage.parentElement.parentElement.parentElement;
    const imageContainerRect = mainImageContainer.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const ZoomContainerLeft = (imageContainerRect.width + 20);
    const ZoomContainerTop = 0;//imageContainerRect.top; // Mouse Y position relative to image
    const ZoomContainerHeight = viewportHeight - (imageContainerRect.top + 10);
    const ZoomContainerWideth = viewportWidth - (imageContainerRect.right + 20 + 30);
    const hoverBoxWidth = 150;
    const hoverBoxHeight = (150 * ZoomContainerHeight) / ZoomContainerWideth;
    // && (event.clientY >= (mainImage.getBoundingClientRect().bottom - (hoverBoxHeight / 2)))
    const hoverBoxTop = (event.clientY <= (mainImage.getBoundingClientRect().top + (hoverBoxHeight / 2))) ? 0 : (event.clientY >= (mainImage.getBoundingClientRect().bottom - (hoverBoxHeight / 2))) ? mainImage.getBoundingClientRect().height - (hoverBoxHeight) : (event.clientY - mainImage.getBoundingClientRect().top) - (hoverBoxHeight / 2);// hover box er top
    const hoverBoxLeft = (event.clientX <= (mainImage.getBoundingClientRect().left + (hoverBoxWidth / 2))) ? 0 : (event.clientX >= (mainImage.getBoundingClientRect().right - (hoverBoxWidth / 2))) ? mainImage.getBoundingClientRect().width - (hoverBoxWidth) : (event.clientX - mainImage.getBoundingClientRect().left) - (hoverBoxWidth / 2);
    this.zoomImageParameters.ZoomContainerLeft = ZoomContainerLeft;
    this.zoomImageParameters.ZoomContainerTop = ZoomContainerTop;
    this.zoomImageParameters.ZoomContainerHeight = ZoomContainerHeight;
    this.zoomImageParameters.ZoomContainerWideth = ZoomContainerWideth;
    this.zoomImageParameters.hoverBoxWidth = hoverBoxWidth;
    this.zoomImageParameters.hoverBoxHeight = hoverBoxHeight;
    this.zoomImageParameters.hoverBoxTop = hoverBoxTop;
    this.zoomImageParameters.hoverBoxLeft = hoverBoxLeft;
    this.zoomImageParameters.mainImageWidth = mainImage.width;
    this.zoomImageParameters.mainImageHeight = mainImage.height;

    this.zoomEnabled = true;
  }

  public zoomScale(): number {
    return this.zoomImageParameters.ZoomContainerWideth / this.zoomImageParameters.hoverBoxWidth;
  }



  public resetZoom(): void {
    this.zoomEnabled = false;
  }
}

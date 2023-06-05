import Image from "next/image"


export const AboutUs = () => {
  return (
    <section className="flex max-w-[1440px] w-[90%] m-auto pt-24 flex-col md:flex-row-reverse justify-around items-center" id="aboutus">
        <div className="md:w-[50%]">
            <span className="font-poppins font-normal text-[18px] leading-[36px]">A bit</span>
            <h3 className="font-poppins font-semibold leading-[52px] text-[30px] tracking-[0.002em]">About us</h3>
            <div>
                <p className="text-[#505050] font-poppins font-normal leading-[25px] sm:leading-[30px] text-[14px] text-left md:text-[14px]">Care beauty dolor sit amet, consectetur adipiscing elit. Congue amet aenean sed enim odio. Tellus tristique ipsum congue semper pretium nibh tellus, diam. Mi, ac sit risus risus netus in accumsan. Facilisi aliquam duis velit sed. Sed id nisl velit, massa morbi purus pellentesque. Libero convallis scelerisque quam in at tincidunt. Rutrum tristique fusce pretium aliquet egestas faucibus tortor tortor in.</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden h-[398px] w-[350px] md:w-[450px]">
            <div className="w-[292px] h-[289px] bg-[#F4F4F4] absolute"></div>
            <div className="relative top-[328px]">
                <Image src='/assets/imageProduct.svg' alt="Two Products" width={248} height={248} priority={true} />
            </div>
                <Image src='/assets/Rectangle118.svg' alt="Border" width={310} height={349} priority={true} className="h-[561] relative top-4"/>
                <Image src='/assets/Rectangle118.svg' alt="Border" width={310} height={361} priority={true} className=" h-[549] relative right-4 bottom-[278px]"/>
        </div>
    </section>
  )
}

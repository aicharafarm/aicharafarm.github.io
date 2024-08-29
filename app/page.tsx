/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EFRPk1hSp0F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import  Header  from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from 'next/image';


export default function Component() {
  return (
    <div
      className="flex flex-col min-h-[100dvh]"
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "url('/images/farm1.jpeg') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "black",
      }}
    >
      <Header/>
      <main className="flex-1">
        <section className="relative h-[60vh] bg-white">
          <Image
            src="/images/farm2.jpeg"
            width={1920}
            height={1080}
            alt="Farm Hero"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-primary-foreground space-y-4">
              <h2 className="text-2xl font-bold text-center">Welcome to Aichara Farm</h2>
              <p className="text-xl">Discover the beauty and tranquility of our family-owned farm.</p>
            </div>
          </div>
        </section>
        <section id="about" className="bg-pink-100 opacity-90 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-[#475569]">
                  Aichara Farm is dedicated to sustainable and organic farming practices. Located in the heart of
                  nature, we grow a variety of crops and raise livestock in an eco-friendly manner. Our mission is to
                  provide fresh, healthy produce to our community while caring for the environment.
                </p>
                <h2 className="text-3xl font-bold mb-4">Our Produce</h2>
                <section className="text-[#475569]">
                  <ul>
                      <li><strong>Fresh Vegetables:</strong> Carrots, tomatoes, lettuce, cucumbers, and more.</li>
                      <li><strong>Fruits:</strong> Coming soon.</li>
                      <li><strong>Dairy Products:</strong> Fresh milk, ghee, and curd from our grass-fed cows.</li>
                      <li><strong>Free-Range Grains:</strong> Wheat, bajra.</li>
                  </ul>
                </section>
              </div>
              <div>
                <Image
                  src="/images/farm_groundnut1.jpeg"
                  width={600}
                  height={400}
                  alt="Farm History"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="visit" className="bg-pink-100 opacity-85 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Visit Our Farm</h2>
                <p className="text-[#475569]">
                  We welcome visitors to our farm throughout the year. Explore our beautiful property, learn about our
                  farming practices, and enjoy the peaceful countryside.
                </p>
                <p className="text-[#475569]">
                  We also offer cozy accommodations for those who want to stay and experience the farm life. Book your
                  stay today and enjoy a relaxing getaway.
                </p>
                <div className="mt-6">
                  <Button className="mr-4">Book Now</Button>
                  <Button variant="outline">Coming Soon</Button>
                </div>
              </div>
              <div>
                <Image
                  src="/images/farm7.jpeg"
                  width={600}
                  height={400}
                  alt="Farm Accommodations"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

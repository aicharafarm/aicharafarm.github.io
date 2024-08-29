import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FacebookIcon, TwitterIcon, InstagramIcon, MailIcon} from "@/components/ui/SocialIcons";
import {ReactElement} from "react";
import Image from 'next/image';

const Footer = () : ReactElement =>{
  return (

    <footer id="contact"
            className="bg-[rgba(76,175,80,0.8)] text-primary-foreground py-6 px-4 md:px-6">
      <div
          className="container flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
              src="/aichara_farm.svg"
              width={40}
              height={40}
              alt="Farm Logo"
              className="rounded-full"
              style={{aspectRatio: "40/40", objectFit: "cover"}}
          />
          <h2 className="text-2xl font-bold">Aichara Farm</h2>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            <FacebookIcon className="w-6 h-6"/>
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            <TwitterIcon className="w-6 h-6"/>
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            <InstagramIcon className="w-6 h-6"/>
          </Link>
          <Link href="mailto:contact@aicharafarm.in" className="hover:underline" prefetch={false}>
            <MailIcon className="w-6 h-6"/>
          </Link>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-blue-50">
              We would love to hear from you! Feel free to reach out with any questions
              or comments.
            </p>
            <div className="mt-6">
              <Button
                  asChild
                  variant="default" // You can change this to any variant you prefer
                  size="default"
              >
                <a href="mailto:contact@aicharafarm.in">Email Us</a>
              </Button>
              <Button
                  asChild
                  variant="secondary" // You can change this to any variant you prefer
                  size="default"
              >
                <a href="tel:+91 0000000000">Call Us</a>
              </Button>
              <div className="bg-blue-950 text-black-50 p-6 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Address:</h2>
                <p>Shyamnagar Ghatwa,</p>
                <p>Kuchaman-Deedwana,</p>
                <p>Rajasthan 341509</p>

                <h2 className="text-lg font-semibold mt-6 mb-4">Opening Hours:</h2>
                <p>Monday to Sunday: 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
          <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.311647155057!2d75.11520547589808!3d27.33472374182688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c9b003f6ddc1b%3A0xa3930187dacf1ae2!2sAichara%20Farm!5e0!3m2!1sen!2sjp!4v1718352596477!5m2!1sen!2sjp"
                width="100%"
                height="400"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
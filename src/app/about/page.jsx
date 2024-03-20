import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of creative minds, tech enthusiasts, 
            and customer-centric professionals 
            dedicated to redefining the art of invitation design. 
            With years of experience in both design and technology, 
            we bring a unique blend of expertise to the table, 
            ensuring that every aspect of our platform is thoughtfully 
            crafted and meticulously executed.
            <br />
            <br />
            <h1 className={styles.title}>Our Vision</h1>
            <br />
              Our vision is to be the premier destination for digital 
              invitation creation, setting the standard for innovation, 
              creativity, and convenience in the industry. 
            <br />
            <br />
            <h1 className={styles.title}>Location</h1>
            <br />
              Digital Valley, 103, Amora Arcade, 
              near Mauni International School, 
              Uttran, Surat, Gujarat 394105
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            inviteMate offers a user-friendly and intuitive platform where 
            users can easily create stunning digital invitation cards for any occasion. 
            Whether its a wedding, birthday, baby shower, or corporate event, 
            our comprehensive suite of tools and templates caters to every need and style.
            <br />
            <br />
            <br />
            <h1 className={styles.title}>Why Choose Us ?</h1>
            <br /> - Easy to use 
            <br />
            <br /> - Personalized Experience
            <br />
            <br /> - Seamless Integration
            <br />
            <br /> - Exceptional Support
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

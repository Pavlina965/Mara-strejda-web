import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function MapLocation() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5125.741924107469!2d14.4030388!3d50.0325137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93f6aaaaaaa9%3A0x11c8b5297e146cfd!2sMikopa%2C%20spol.%20s%20r.o.!5e0!3m2!1sen!2scz!4v1725641336447!5m2!1sen!2scz"
      width="400"
      height="250"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

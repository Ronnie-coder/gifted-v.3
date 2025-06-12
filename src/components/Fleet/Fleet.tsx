// src/components/Fleet/Fleet.tsx
import { FC, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Car, Bus, AirplaneTilt } from "@phosphor-icons/react";
import styles from './Fleet.module.scss';

const vehicles = [
  {
    id: 1,
    name: "Hyundai H1",
    type: "Luxury Van",
    image: "/assets/images/fleet/hyundai-h1.jpg",
    capacity: "8 Passengers",
    features: ["Air Conditioning", "Leather Seats", "Luggage Space", "Comfortable Interior"]
  },
  {
    id: 2,
    name: "Hyundai Staria",
    type: "Premium Van",
    image: "/assets/images/fleet/hyundai-staria.jpg",
    capacity: "9 Passengers",
    features: ["Premium Interior", "Panoramic Windows", "USB Charging", "Extra Legroom"]
  },
  {
    id: 3,
    name: "Toyota Quantum",
    type: "Group Transport",
    image: "/assets/images/fleet/toyota-quantum.jpg",
    capacity: "14 Passengers",
    features: ["Spacious Interior", "Air Conditioning", "Large Luggage Space", "Comfortable Seating"]
  },
  {
    id: 4,
    name: "Mercedes-Benz Vito",
    type: "Luxury Transport",
    image: "/assets/images/fleet/mercedes-vito.jpg",
    capacity: "8 Passengers",
    features: ["Premium Leather", "Climate Control", "Premium Sound System", "Executive Interior"]
  }
];

const Fleet: FC = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section id="fleet" className={styles.fleet}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Fleet Of Vehicles
        </motion.h2>

        <motion.div 
          className={styles.serviceTypes}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.serviceCard}>
            <Car size={32} weight="duotone" />
            <h3>Private Chauffeur</h3>
            <p>Luxury vehicles with experienced drivers for your comfort</p>
          </div>
          <div className={styles.serviceCard}>
            <Bus size={32} weight="duotone" />
            <h3>Group Transport</h3>
            <p>Spacious vans and buses for group travel</p>
          </div>
          <div className={styles.serviceCard}>
            <AirplaneTilt size={32} weight="duotone" />
            <h3>Aerial Tours</h3>
            <p>Scenic flights and helicopter tours</p>
          </div>
        </motion.div>

        <motion.h3 
          className={styles.fleetTitle}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Available Vehicles
        </motion.h3>
        
        <div className={styles.fleetGrid}>
          {vehicles.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              className={styles.fleetCard}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className={styles.content}>
                <h4>{vehicle.name}</h4>
                <span className={styles.type}>{vehicle.type}</span>
                <p className={styles.capacity}>{vehicle.capacity}</p>
                <ul className={styles.features}>
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className={styles.bookButton}
                  onClick={scrollToContact}
                >
                  Book This Vehicle
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.aerialTours}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.aerialContent}>
            <h3>Aerial Tours Available</h3>
            <p>Experience Cape Town&apos;s breathtaking views from above</p>
            <ul className={styles.features}>
              <li>Scenic Helicopter Flights</li>
              <li>Customizable Routes</li>
              <li>Professional Pilots</li>
              <li>Stunning Photo Opportunities</li>
            </ul>
            <button 
              className={styles.bookButton}
              onClick={scrollToContact}
            >
              Enquire About Aerial Tours
            </button>
          </div>
          <div className={styles.aerialImage}>
            <Image 
              src="/assets/images/fleet/aerial-tour.jpg"
              alt="Aerial Tour"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
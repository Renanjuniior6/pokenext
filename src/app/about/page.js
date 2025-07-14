import Image from "next/image";
import styles from "../../styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
        <h1>About</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae neque massa. Morbi ac iaculis nibh, eu scelerisque risus. Nam ac velit pharetra, euismod lorem et, interdum nulla. Sed placerat, leo sed sollicitudin aliquet, leo diam laoreet justo, nec bibendum nisl tortor eu augue.
        </p>
        <Image src="/images/charizard.png" width={300} height={300} alt="charizard"/>
    </div>
  );
}
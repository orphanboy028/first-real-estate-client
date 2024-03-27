import AppartMentCard from "../../components/cards/AppartMentCard";
import RecommendedCard from "../../components/cards/RecommendedCard";
import ItemCarousel from "../../components/carousel/ItemCarousel";
import EnquiryForm from "../../components/forms/EnquiryForm";
import HeroSection from "../../components/home/heroSection/HeroSection";
import styles from "./homepage.module.css";

export default function Page() {
  return (
    <div className={styles.home_container}>
      <section className={styles.hero_section}>
        <HeroSection />
      </section>

      <section className={styles.section_wrapper}>
        <div className={styles.section_header}>
          <h2 className={styles.section_heading}>Recommended Properties</h2>
          <p className={styles.small_caption}>Curated especially for you</p>
        </div>

        <div>
          <ItemCarousel
            DekstopslidesToShow={6}
            mobileslidesToShow={2}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            cardType={"RecommendedCard"}
          />
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <div className={styles.two_columnContainer}>
          <div className={styles.column_Container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_heading}>
                Apartments, Villas and more
              </h2>
              <p className={styles.small_caption}>in Greater Noida</p>
            </div>
            <div>
              <ItemCarousel
                DekstopslidesToShow={2}
                mobileslidesToShow={3}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                cardType={"HighlighterCards"}
              />
            </div>
          </div>

          <div className={styles.column_Container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_heading}>
                Apartments, Villas and more
              </h2>
              <p className={styles.small_caption}>in Greater Noida</p>
            </div>

            <div className={styles.form_card}>
              <div className={styles.form_wrapper}>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <div className={styles.section_header}>
          <h2 className={styles.section_heading}>Recommended Properties</h2>
          <p className={styles.small_caption}>Curated especially for you</p>
        </div>

        <div className={styles.Widget_showCaase_container}>
          <AppartMentCard />
        </div>
      </section>
    </div>
  );
}

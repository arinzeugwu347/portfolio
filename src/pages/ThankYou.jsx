import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function ThankYou() {
  return (
    <PageWrapper className="status-page">
      <section className="shell status-page__inner" aria-labelledby="thank-you-title">
        <span className="status-page__icon" aria-hidden="true"><FiCheck /></span>
        <p className="section-kicker">Message received</p>
        <h1 id="thank-you-title">Thank you for reaching out.</h1>
        <p>
          Your note has arrived. I will review it carefully and get back to you
          as soon as possible.
        </p>
        <Link className="button button--primary" to="/">
          Back to the portfolio <FiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </PageWrapper>
  );
}

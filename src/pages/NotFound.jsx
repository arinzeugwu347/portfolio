import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper className="status-page">
      <section className="shell status-page__inner" aria-labelledby="not-found-title">
        <p className="status-page__code" aria-hidden="true">404</p>
        <p className="section-kicker">Off the map</p>
        <h1 id="not-found-title">This page does not exist.</h1>
        <p>
          The address may have changed, or the page may have moved. The selected
          work and contact pages are still ready when you are.
        </p>
        <div className="status-page__actions">
          <Link className="button button--primary" to="/">Return home</Link>
          <Link className="button button--secondary" to="/projects">Explore projects</Link>
        </div>
      </section>
    </PageWrapper>
  );
}

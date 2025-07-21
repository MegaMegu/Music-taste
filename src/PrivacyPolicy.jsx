import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import "/src/Components/Styles/privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <Heading />
      <div className="buddy">
        <div className="insider">
          <h1>Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> June 14, 2025
          </p>

          <p>
            This website uses the <strong>Spotify Web API</strong> to access
            your music data in order to generate a personalized experience.
          </p>

          <p>
            By using this site, you agree to allow access to limited information
            from your Spotify account, including:
          </p>
          <ul>
            <li>Your account username</li>
            <li>Your top listened-to artists and/or tracks</li>
          </ul>

          <h2>Data Usage</h2>
          <p>
            We <strong>do not store, collect, or share</strong> any of your
            personal data. All information retrieved through Spotify is
            processed <strong>locally</strong> on your device and is only used
            to generate your personalized graphic or recommendation result.
          </p>
          <p>
            No account information is saved to any server, database, or
            third-party service.
          </p>

          <h2>Removing Access</h2>
          <p>
            You may revoke this website’s access to your Spotify account at any
            time by visiting the{" "}
            <a
              href="https://www.spotify.com/account/apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify App Permissions Page
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

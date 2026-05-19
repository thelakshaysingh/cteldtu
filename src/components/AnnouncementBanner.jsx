import { Link } from 'react-router-dom';
import './AnnouncementBanner.css';

const AnnouncementBanner = () => {
    return (
        <div className="announcement-banner">
            <Link to="/programmes" className="announcement-track">
                <div className="announcement-content">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="announcement-item">
                            <span className="announcement-tag">UPDATE</span>
                            Due to a technical issue with the registration portal, the registration deadline has been extended until 15th March, 2026.
                        </span>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default AnnouncementBanner;

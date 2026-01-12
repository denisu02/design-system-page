import './Card.css';

type CardProps = {
    headline: string;
    subtitle: string;
    description: string;
    avatar?: string;
};

function Card({ headline, subtitle, description, avatar }: CardProps) {
    return (
        <div className="card-container">
            <div className="card-header">
                {avatar ? (
                    <img src={avatar} alt="Avatar" className="img-avatar" />
                ) : (
                    <div className="card-avatar-placeholder" />
                )}
                <div>
                    <h2>{headline}</h2>
                    <h4 className="card-subtitle">{subtitle}</h4>
                </div>
            </div>
            <hr></hr>
            <div>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;

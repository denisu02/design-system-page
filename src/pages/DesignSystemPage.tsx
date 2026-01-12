import Badge from '../components/Badge/Badge';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import './DesignSystemPage.css';

const onHandleClick = () => {
    alert('onClick event is working!');
};

function DesignSystemPage() {
    return (
        <div className="design-system-page">
            <div>
                <div className="buttons-container">
                    <Button variant="primary" onHandleClick={onHandleClick}>
                        Save
                    </Button>
                    <Button variant="secondary" onHandleClick={onHandleClick}>
                        Cancel
                    </Button>
                    <Button variant="outline" onHandleClick={onHandleClick}>
                        Outline
                    </Button>
                    <Button disabled={true} onHandleClick={onHandleClick}>
                        Disabled
                    </Button>
                </div>
                <div className="badge-container">
                    <Badge variant="primary-badge">New</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Danger</Badge>
                    <Badge variant="danger" size="md">
                        Error
                    </Badge>
                    <Badge variant="success" size="sm">
                        Success
                    </Badge>
                </div>
                <div className="cards-container">
                    <Card
                        headline="Headline"
                        subtitle="Subtitle"
                        description="Please add your content here. Keep it short and simple. And smile :)"
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxLZyQC9Fw6O7K3GBJsbFdJEmq-9GMjkRuw&s"
                    />
                    <Card
                        headline="No avatar card"
                        subtitle="Still looks good"
                        description="Avatar is optional; show placeholder circle instead."
                    />
                </div>
            </div>
        </div>
    );
}
export default DesignSystemPage;

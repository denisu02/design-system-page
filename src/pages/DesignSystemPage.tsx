import Button from '../components/Button';
import './DesignSystemPage.css';

const onHandleClick = () => {
    alert('onClick event is working!');
};

function DesignSystemPage() {
    return (
        <div className="design-system-page">
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
    );
}
export default DesignSystemPage;

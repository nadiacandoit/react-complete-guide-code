import Card from './Card';

const Button = (props) => {
    return (
        <Card className="button">
            {props.children}
        </Card>
    );
};

export default Button; 
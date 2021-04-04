import FAQ from './FAQ.jsx';
import './Background.css'

const Background = () => {
    return (
        <div className="background">
            <div className="illustration_container">
                <div className="main">
                    <FAQ />
                    <img src="/images/bg-pattern-desktop.svg" className="bg-img" alt="" />
                    <img src="/images/illustration-woman-online-desktop.svg" className="illustration" alt="illustration" />
                </div>
            </div>
        </div>
    );
}

export default Background;
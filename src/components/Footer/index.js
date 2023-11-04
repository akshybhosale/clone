import FooterContainer from './styles';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
function Footer() {
  return (
    <>
    <FooterContainer>
      <span>Developed by Akshay Bhosale</span>
      <div className="socials">
        <a id="github" href="https://github.com/akshybhosale" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a id="linkedin" href="https://www.linkedin.com/in/akshay-bhosale-480a6b189/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    
    </FooterContainer>
   
    </>
  );
}

export default Footer;

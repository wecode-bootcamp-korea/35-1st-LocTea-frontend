import SNS_LIST from './SnsData';

export default function Sns() {
  return SNS_LIST.map(info => {
    return (
      <div className="login-footer-text">
        <img className="phone" src={info.img} alt="" />
        <p>{info.text}</p> <p>{info.text2}</p>
      </div>
    );
  });
}

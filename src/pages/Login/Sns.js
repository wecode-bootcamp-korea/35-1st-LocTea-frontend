import SNS_LIST from './SnsData';

export default function Sns() {
  return SNS_LIST.map(info => {
    return (
      <div key={info.id} className="login-footer-text">
        <img className="phone" src={info.img} alt="" />
        <p>{info.text}</p> <p>{info.text2}</p>
        <p className="not-visible">{info.text3}</p>
      </div>
    );
  });
}

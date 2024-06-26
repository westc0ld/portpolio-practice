import React from 'react';

const Contents = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="mini">
          <div className="content_1">
            <div className="photo">
              <img src='font/profile.jpg' className="profile" alt='profile' />
            </div>
            <div className="abstract">
              <h2 className="abstract_name">서 찬</h2>
              <div className="line"></div>
              <p className="text-base">
                {/* <img src='font\calendar-days-regular.svg' className="font_calendar" />&nbsp; */}
                생년월일: 99.01.19
                <br />학력: 한국공학대학교(경영학과)
                <br />연락처: 010-3414-0035
                <br />이메일: oso0035@naver.com
              </p>
            </div>
          </div>
          <div className="content_2">
            <h2 className="introduce_front">긍정에너지가 넘치는 서찬입니다!</h2>
            <p className="introduce">&nbsp;안녕하세요, 보안전문가를 꿈꾸고 있는 서찬이라고 합니다.<br />나날이 성장하고 발전하는 것을 즐기는 사람입니다.<br />언제나 새로운 도전을 즐기며 적극적으로 나아가는 성격을 가지고 있습니다.<br />주변 사람들과 소통을 중요시하며 친절하고 협력적인 성향을 가지고 있습니다.<br />항상 포기하지 않고 열정적으로 목표를 향해 나아가는 것을 좋아합니다.<br />함께 즐거움과 성취를 공유할 수 있는 좋은 동료가 되고 싶습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;

function checkFriend() {
    const messages = [
        "등하굣길에 앉아 갈 수 있어요.",
        "흰 옷을 입어도 국물이 안 튈 거예요.",
        "건 강 최 고",
        "이 문구를 본 사자는 행운이 777배 증가합니다.",
        "온 우주가 사자를 도울 거랍니당",
        "자신감이 생기는 부적)) 근데 당연함 사자가 최고",
        "사자의 하루에 행운이 가득할 거예요."
    ];

    // 랜덤으로 문구 선택
    const randomIndex = Math.floor(Math.random() * messages.length);

    // 랜덤으로 선택된 메시지를 alert 창으로 띄우기
    alert(messages[randomIndex]);
}


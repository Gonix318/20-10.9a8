/**
 * DỮ LIỆU CHÍNH THỨC CỦA 21 BẠN NỮ TRONG LỚP (ĐÃ CẬP NHẬT)
 * SBD chuẩn theo danh sách lớp
 */
const STUDENTS_DATA = [
  {
    id: "SV01",
    sbd: "01",
    name: "Nguyễn Trần Phúc Bình An",
    wishes: [
      "Chúc Bình An một ngày 20/10 ngập tràn niềm vui và bình yên đúng như cái tên tuyệt đẹp của cậu!",
      "Mong cậu luôn giữ được nụ cười dịu dàng, mỗi ngày đến trường đều là một ngày hạnh phúc.",
      "Chúc cậu luôn kiên định với những mục tiêu của mình và gặt hái thật nhiều thành tích rực rỡ.",
      "Cảm ơn sự xuất hiện của cậu, chúc Bình An luôn được yêu thương và trân trọng mỗi ngày!"
    ]
  },
  {
    id: "SV04",
    sbd: "04",
    name: "Phạm Ngọc Bích",
    wishes: [
      "Chúc Ngọc Bích 20/10 luôn tươi tắn, rạng rỡ và tỏa sáng lấp lánh như viên ngọc quý!",
      "Chúc cậu đạt được điểm số thật cao trong mọi kỳ thi và luôn vững tin vào bản thân.",
      "Mong những điều ngọt ngào và may mắn nhất sẽ luôn đồng hành cùng cậu trên mọi nẻo đường.",
      "20/10 thật nhiều hoa, nhiều quà và luôn tràn đầy năng lượng tích cực nhé Bích ơi!"
    ]
  },
  {
    id: "SV08",
    sbd: "08",
    name: "Lê Trần Vân Giang",
    wishes: [
      "Chúc Vân Giang một ngày 20/10 nhẹ nhàng, dịu êm như một dòng sông mùa thu tuyệt đẹp!",
      "Mong cậu luôn vui vẻ, an yên và tìm thấy niềm vui trong từng việc nhỏ mỗi ngày.",
      "Chúc cậu học tập thật tốt, luôn tự tin tỏa sáng với cá tính riêng của mình nhé.",
      "Gửi tới Vân Giang những đóa hoa tươi thắm nhất và lời chúc bình an nhất!"
    ]
  },
  {
    id: "SV09",
    sbd: "09",
    name: "Ngô Gia Hân",
    wishes: [
      "Chúc Gia Hân ngày 20/10 luôn tràn ngập niềm vui, tiếng cười và sự may mắn!",
      "Mong nụ cười tươi tắn của cậu sẽ luôn nở trên môi dù gặp bất kỳ thử thách nào.",
      "Chúc cậu gặt hái được thật nhiều điểm 10 và luôn có những kỷ niệm đẹp dưới mái trường.",
      "Chúc Gia Hân luôn là cô gái tự tin, duyên dáng và được mọi người yêu quý!"
    ]
  },
  {
    id: "SV10",
    sbd: "10",
    name: "Trần Thái Gia Hân",
    wishes: [
      "Chúc Thái Gia Hân có một ngày 20/10 thật ý nghĩa, nhiều niềm vui và quà tặng!",
      "Mong cậu luôn giữ vững phong độ học tập, luôn tràn đầy nhiệt huyết và năng lượng.",
      "Chúc mọi điều ước tốt đẹp nhất của cậu trong ngày hôm nay đều sẽ trở thành sự thật.",
      "Cảm ơn vì đã luôn mang lại sự ấm áp cho mọi người xung quanh, 20/10 thật hạnh phúc nhé!"
    ]
  },
  {
    id: "SV20",
    sbd: "20",
    name: "Phạm Nguyên Kim Ngân",
    wishes: [
      "Chúc Kim Ngân một ngày 20/10 ngập tràn niềm vui, xinh đẹp và tỏa sáng rực rỡ!",
      "Chúc cậu luôn thuận lợi trong mọi bài kiểm tra và đạt được kết quả như ý muốn.",
      "Mong mỗi ngày trôi qua với Kim Ngân đều là một ngày ngập tràn tiếng cười và điều bất ngờ.",
      "Chúc cậu luôn giữ được sự lạc quan, tự tin và duyên dáng nhé!"
    ]
  },
  {
    id: "SV21",
    sbd: "21",
    name: "Lê Bảo Ngọc",
    wishes: [
      "Chúc Bảo Ngọc một ngày 20/10 thật lung linh, luôn vui vẻ và nhận được thật nhiều điều ngọt ngào nhất!",
      "Mong cậu luôn xinh xắn, rạng rỡ và đạt trọn vẹn mọi mục tiêu, ước mơ mà mình ấp ủ.",
      "Chúc nụ cười của Bảo Ngọc luôn rạng ngời như ánh nắng ban mai và sưởi ấm cho cả tập thể lớp chúng mình.",
      "Chúc cậu luôn hạnh phúc, bình yên và luôn tự hào về sự đặc biệt, đáng yêu của chính bản thân mình mỗi ngày.",
      "Mong mỗi ngày đến lớp của Bảo Ngọc đều ngập tràn niềm vui dịu dàng và những kỷ niệm học trò thật đẹp.",
      "Chúc cô gái đặc biệt này thi cử luôn suôn sẻ, đề nào cũng trúng tủ và rinh toàn điểm 10 về tay!",
      "Dù phía trước có bao nhiêu áp lực học tập, chúc Bảo Ngọc vẫn luôn giữ được sự lạc quan và tinh thần yêu đời này nhé.",
      "Chúc cậu 20/10 ngập tràn trong biển hoa, nhận được những món quà xinh xắn nhất và luôn được trân trọng mỗi ngày.",
      "Cảm ơn vì cậu là một phần vô cùng tuyệt vời của lớp, chúc Bảo Ngọc mãi tỏa sáng rực rỡ như một viên ngọc quý!",
      "Gửi tới cậu ngàn lời chúc tốt lành nhất: luôn an yên, luôn tự tin và mãi là cô gái hạnh phúc nhất trần đời!"
    ]
  },
  {
    id: "SV22",
    sbd: "22",
    name: "Nguyễn Thanh Ngọc",
    wishes: [
      "Chúc Thanh Ngọc ngày 20/10 thật dịu dàng, bình yên và nhận được nhiều lời chúc tốt đẹp!",
      "Mong cậu luôn tìm thấy niềm hứng khởi trong học tập và có những trải nghiệm thật vui.",
      "Chúc cho mọi dự định sắp tới của cậu đều suôn sẻ và gặt hái thành công vang dội.",
      "Chúc Thanh Ngọc mãi luôn xinh đẹp, tự tin và được trân quý!"
    ]
  },
  {
    id: "SV23",
    sbd: "23",
    name: "Trần Bình Thảo Ngọc",
    wishes: [
      "Chúc Thảo Ngọc có một ngày 20/10 ngập tràn sắc hoa và những điều kỳ diệu!",
      "Mong cậu luôn giữ được sự nhẹ nhàng, tinh tế và nụ cười ấm áp thân quen.",
      "Chúc mọi kỳ thi phía trước đều nằm trong tầm tay của cậu, điểm số luôn thật cao.",
      "Chúc Thảo Ngọc luôn hạnh phúc, may mắn và luôn là niềm tự hào của cả lớp!"
    ]
  },
  {
    id: "SV24",
    sbd: "24",
    name: "Nguyễn Hoàng Phúc Nguyên",
    wishes: [
      "Chúc Phúc Nguyên một ngày 20/10 thật rực rỡ, ngập tràn hoa thơm và những điều ngọt ngào nhất!",
      "Mong cậu luôn vui vẻ, hồn nhiên và giữ trọn năng lượng tích cực lan tỏa đến mọi người.",
      "Chúc cho mọi dự định trong học tập của Phúc Nguyên đều suôn sẻ và đạt kết quả mỹ mãn.",
      "Cảm ơn vì đã luôn là một mảnh ghép thật đặc biệt và đáng yêu của lớp chúng mình!"
    ]
  },
  {
    id: "SV25",
    sbd: "25",
    name: "Hoàng Tuệ Nhi",
    wishes: [
      "Chúc Tuệ Nhi 20/10 thật nhiều niềm vui, luôn thông minh, sắc sảo và cuốn hút!",
      "Mong cậu luôn giữ vững ngọn lửa đam mê và gặt hái được những thành tích xuất sắc nhất.",
      "Chúc cậu mỗi ngày đều tràn đầy cảm hứng học tập và có thêm nhiều người bạn tốt.",
      "Chúc Tuệ Nhi mãi rạng ngời và luôn là đóa hoa xinh đẹp nhất của khu vườn này!"
    ]
  },
  {
    id: "SV26",
    sbd: "26",
    name: "Nguyễn Phương Gia Nhi",
    wishes: [
      "Chúc Gia Nhi một ngày 20/10 ngập tràn tiếng cười, nhận được thật nhiều hoa và quà!",
      "Mong cậu luôn đáng yêu, hoạt bát và lan tỏa năng lượng tích cực tới mọi người.",
      "Chúc cho mọi mong muốn của Gia Nhi đều sớm thành hiện thực trong năm học này.",
      "Chúc cậu có những kỷ niệm thanh xuân thật rực rỡ và đáng nhớ dưới mái trường!"
    ]
  },
  {
    id: "SV28",
    sbd: "28",
    name: "Võ Ngọc Phụng",
    wishes: [
      "Chúc Ngọc Phụng một ngày Phụ nữ Việt Nam 20/10 thật ấm áp, ngập tràn tình cảm!",
      "Mong cậu luôn vững vàng, tự tin và tỏa sáng theo cách riêng biệt nhất của mình.",
      "Chúc cậu đạt được kết quả thật tốt trong mọi môn học và luôn yêu đời.",
      "Chúc Ngọc Phụng mỗi ngày trôi qua đều có thêm nhiều niềm vui mới!"
    ]
  },
  {
    id: "SV33",
    sbd: "33",
    name: "Nguyễn Thị Xuân Quỳnh",
    wishes: [
      "Chúc Xuân Quỳnh ngày 20/10 luôn tràn đầy sức sống và thi vị như một bài thơ mùa xuân!",
      "Mong cậu luôn giữ được nét dịu dàng, nụ cười hiền và sự nhiệt tình đáng mến.",
      "Chúc cậu luôn thuận buồm xuôi gió trong học tập và chạm tới những ước mơ lớn.",
      "Chúc Xuân Quỳnh luôn được yêu thương, hạnh phúc và bình an trong cuộc sống!"
    ]
  },
  {
    id: "SV34",
    sbd: "34",
    name: "Phạm Trịnh Tú Quỳnh",
    wishes: [
      "Chúc Tú Quỳnh 20/10 thật ngọt ngào, rạng rỡ và nhận được muôn vàn lời chúc ý nghĩa!",
      "Mong cậu luôn xinh xắn, tự tin và chinh phục được mọi đỉnh cao tri thức.",
      "Chúc cậu luôn có những phút giây thư giãn tuyệt vời bên gia đình và bạn bè.",
      "Chúc Tú Quỳnh mãi là một mảnh ghép rực rỡ và đáng yêu của tập thể lớp!"
    ]
  },
  {
    id: "SV35",
    sbd: "35",
    name: "Phan Thị Thanh Tâm",
    wishes: [
      "Chúc Thanh Tâm ngày 20/10 ngập tràn bình yên, ấm áp và nụ cười luôn hé mở!",
      "Mong tâm hồn cậu luôn thanh thản, trong trẻo và ngập tràn những suy nghĩ lạc quan.",
      "Chúc cậu luôn đạt kết quả xuất sắc trong học tập và nhận được sự yêu quý từ mọi người.",
      "Chúc Thanh Tâm một ngày lễ thật trọn vẹn và đáng nhớ nhé!"
    ]
  },
  {
    id: "SV38",
    sbd: "38",
    name: "Nguyễn Lê Hải Thuỷ",
    wishes: [
      "Chúc Hải Thủy một ngày 20/10 dạt dào niềm vui như biển rộng và luôn rạng ngời!",
      "Mong cậu luôn giữ được sự tươi vui, năng động và kiên trì theo đuổi ước mơ.",
      "Chúc cho mọi bài thi sắp tới của cậu đều đạt kết quả mỹ mãn nhất.",
      "Chúc Hải Thủy luôn ngập tràn may mắn và có một ngày lễ ngập tràn hoa xinh!"
    ]
  },
  {
    id: "SV39",
    sbd: "39",
    name: "Nguyễn Thị Nhật Thư",
    wishes: [
      "Chúc Nhật Thư 20/10 thật nhiều niềm vui, luôn xinh tươi và ngập tràn điều ngọt ngào!",
      "Mong cậu luôn giữ trọn nét hồn nhiên, sự chăm chỉ và trái tim ấm áp này.",
      "Chúc cậu gặt hái thật nhiều hoa điểm 10 và có những kỷ niệm học trò khó quên.",
      "Chúc Nhật Thư luôn hạnh phúc, may mắn và thành công trên mọi nẻo đường!"
    ]
  },
  {
    id: "SV41",
    sbd: "41",
    name: "Cao Thị Thuỳ Trang",
    wishes: [
      "Chúc Thùy Trang ngày 20/10 thật rạng rỡ, xinh đẹp và luôn ngập tràn tiếng cười!",
      "Mong cậu luôn dịu dàng, thanh lịch và luôn tự tin vào khả năng của bản thân.",
      "Chúc cậu vượt qua mọi bài thi một cách xuất sắc và luôn đạt phong độ tốt nhất.",
      "Chúc Thùy Trang có một ngày kỷ niệm thật trọn vẹn, ấm cúng và hạnh phúc!"
    ]
  },
  {
    id: "SV43",
    sbd: "43",
    name: "Nguyễn Ngọc Nhật Uyên",
    wishes: [
      "Chúc Nhật Uyên một ngày 20/10 lung linh, rực rỡ và ngập tràn hoa thơm quả ngọt!",
      "Mong cậu luôn xinh xắn, ngọt ngào và giữ được nét duyên dáng vốn có.",
      "Chúc cậu luôn suôn sẻ trong học tập và chinh phục được mọi mục tiêu của mình.",
      "Chúc Nhật Uyên luôn là niềm vui và sự tự hào của bạn bè, thầy cô!"
    ]
  },
  {
    id: "SV46",
    sbd: "46",
    name: "Trần Thị Thanh Yến",
    wishes: [
      "Chúc Thanh Yến một ngày 20/10 vui tươi như cánh chim én báo mùa xuân về!",
      "Mong cậu luôn giữ được nụ cười tỏa nắng, sự tự tin và tinh thần lạc quan yêu đời.",
      "Chúc cậu đạt được nhiều thành tích học tập cao và gặp gỡ nhiều điều may mắn.",
      "Cảm ơn sự đồng hành của cậu, chúc Thanh Yến có một ngày 20/10 tuyệt vời nhất!"
    ]
  }
];

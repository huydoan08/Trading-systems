"use client";
import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";

const faqs =
  [
    {
      "title": "Câu chuyện con cá sấu già",
      "content": [
        "Con cá sấu già đang nằm nổi bên bờ sông khi một con cá sấu trẻ hơn bơi tới bên cạnh nó.\n“Tôi nghe nhiều người nói rằng bác là tay thợ săn ác liệt nhất con sông này. Làm ơn hãy dạy tôi các kỹ thuật của bác.”\n\nBị đánh thức khỏi giấc ngủ ngắn trong một ngày đẹp trời, con cá sấu già liếc nhìn con cá sấu trẻ với đôi mắt bò sát của mình, không nói gì và sau đó lại ngủ thiếp đi trên mặt nước.\n\nCảm thấy thất vọng và thiếu tôn trọng, cá sấu trẻ bơi ngược dòng đuổi theo mấy con cá da trơn, để lại phía sau một loạt bong bóng. Nó nhủ thầm: “Mình sẽ cho bác ta thấy.”\n\nCuối ngày, con cá sấu trẻ trở lại bên cá sấu già, kẻ vẫn đang ngủ và bắt đầu khoe khoang về cuộc săn mồi thành tựu của nó. “Tôi đã bắt được hai con cá da trơn đầy thịt hôm nay. Bác bắt được gì rồi? Không có gì ư? Có lẽ bác không mạnh như người ta nói.”\n\nKhông hề bị ảnh hưởng, con cá sấu già lại nhìn cá sấu trẻ, không nói gì, nhắm mắt lại và tiếp tục nổi trên mặt nước khi những chú cá nước ngọt nhỏ xíu bơi nhẹ nhàng cùng đám tảo trên bụng nó. Một lần nữa, con cá sấu trẻ tức giận vì không thể nhận được phản ứng nào từ vị cao tuổi kia, lần thứ hai nó bơi về thượng nguồn để xem có thể tiếp tục săn được cái gì.\n\nSau vài giờ lùng bắt, nó săn được một con cò nhỏ. Mỉm cười, nó giữ con cò trong hàm và bơi trở lại bên con cá sấu già, kiên quyết thể hiện ai mới là thợ săn thực sự. Khi con cá sấu trẻ uốn người quay tròn, nó thấy con cá sấu già vẫn trôi nổi chỗ cũ bên bờ sông. Tuy nhiên, có gì đó đã thay đổi – một con linh dương đầu bò to lớn đang thưởng thức việc uống nước buổi chiều chỉ cách đầu con cá sấu già vài mét.\n\nTrong một chuyển động nhanh như chớp, con cá sấu già lao ra khỏi nước, quấn cái hàm quanh con linh dương khổng lồ và kéo nó xuống nước. Kinh hoàng, con cá sấu trẻ bơi lên khỏi mặt nước với con chim nhỏ còn treo bên miệng. Nó nhìn cá sấu già đang thưởng thức bữa ăn 500 kg của mình và hỏi: “Làm ơn… hãy nói cho tôi … làm sao…. Làm sao bác làm được điều đó?”\n\nNhìn qua con linh dương đầu bò, cá sấu già cuối cùng cũng đáp lại: “Ta chả làm gì cả.”"
      ]
    },
    {
      "title": "Đàm thoại như một Trí giả hay như một Vương giả?",
      "content": [
        "Để có thể có một cuộc trò chuyện thoải mái nhất, quan trọng nhất là điều gì? 🤔\n\nMình đã nghe hết bộ Mi Tiên Vấn Đáp, mình ấn tượng nhất là cách mở đầu câu chuyện.\n\nTrong cuốn sách này có rất nhiều phần hỏi đáp mà phải ngẫm đi ngẫm lại rất nhiều...(nghe một lần như cưỡi ngựa xem hoa)...\n\nẤn tượng là khi bắt đầu cuộc trao đổi, đại đức Na Tiên đã đưa ra điều kiện...\n\nCũng như vậy, bạn có thể áp dụng cho rất nhiều cuộc thảo luận và điều kiện bắt đầu phải cùng tư duy và cùng hệ quy chiếu.\n\nXin trích nguyên văn.\n\n-----\n\nSau hai câu hỏi mở đầu, đức vua biết là gặp được bậc trí tuệ, nên ngài muốn đi sâu vào giáo pháp, bèn ướm lời:\n\n– Bạch đại đức! Trẫm rất thích đàm đạo với đại đức về nhiều vấn đề khác nữa, nhưng không rõ đại đức có hoan hỷ không?\n\n– Tâu đại vương! Cái đó còn tùy thuộc nơi đại vương! Nếu đại vương đàm thoại mà lấy tư cách một Trí giả (Panditavàda), thì bần tăng sẵn sàng hầu đáp. Nhưng nếu đại vương đứng trên tư cách mình là bậc Vương giả (Ràjavàda), thì xin thưa thẳng, bần tăng sẽ không thể hầu đối được.\n\n– Tư cách một Trí giả là như thế nào?\n\n– Tâu đại vương! Phàm là Trí giả nói chuyện với nhau, bao giờ cũng nói lời ngay thật, muốn trao đổi hiểu biết, soi sáng hiểu biết cho nhau. Trong câu chuyện, nếu có những lý lẽ đưa ra, dù đúng, dù sai, dù cao, dù thấp, dù phải, dù trái v.v… các bậc Trí giả không bao giờ vì thế mà phiền lòng hay nóng giận. Họ tôn trọng nhau, dù ý kiến, tư tưởng có bất đồng chăng nữa. Thắng, bại không hề làm cho họ chau mày, mà chính chân lý, sự thật mới thuyết phục được họ. Nếu gặp phải đối phương là tay lợi trí, lợi khẩu, hùng biện đại tài, bậc Trí giả không vì thế mà tìm cách cản ngăn, áp chế, bắt ngừng nói, đuổi ra khỏi chỗ ngồi; hoặc lươn lẹo dùng những xảo thuật miệng lưỡi, ngụy biện nhằm tranh thắng cho kỳ được! Đấy là cốt cách, phong thái đầy hiểu biết của bậc Trí giả, tâu đại vương!\n\nĐức vua gật đầu mỉm cười:\n\n– Đúng bậc Trí giả là vậy! Còn tư cách của bậc Vương giả là thế nào, thưa đại đức?\n\n– Tâu đại vương! Bậc Vương giả vì quen sống trong quyền lực, nhất hô bá ứng, nên khi đối thoại thường quen áp đảo, bắt buộc kẻ khác chấp thuận quan điểm của mình. Nếu có ai đó nói một câu không vừa ý, hoặc đối nghịch với tư kiến của mình; bậc vương giả sẽ không hài lòng, sẵn sàng dùng quyền uy của mình mà bắt tội, chẳng dựa vào lẽ phải và công bằng. Những cuộc nói chuyện như thế rồi chẳng đi đến đâu, vì thái độ và lối xử sự của các bậc Vương giả đã tự ngăn chặn con đường về với sự thật, đốt cháy mối cảm thông và cắt đứt sự hiểu biết. Đối thoại trong tư thế bậc Vương giả thường rơi vào một chiều, phiến diện và ngõ cụt như vậy đấy, tâu đại vương!\n\nĐức vua Mi-lan-đà lại gật đầu nữa:\n\n– Hay lắm, thưa đại đức, trẫm đã hiểu rõ rồi. Trẫm chẳng thích cách nói chuyện của người Vương giả, trái lại, trẫm sẽ cố gắng xem mình là người Trí giả để hầu chuyện với đại đức. Khi đối thoại, đại đức hãy quên cái hào nhoáng cao sang bên ngoài của trẫm đi, mà hãy tiếp xúc với chính con người của trẫm thôi. Đại đức cứ nói chuyện một cách tự nhiên, bình thường như đại đức nói chuyện với chư tỳ kheo, tỳ kheo ni, sa di, sa di ni, cận sự nam, nữ v.v…; thậm chí như nói chuyện với người hộ tự, người quét rác, người nấu ăn trong ngôi chùa này cũng được vậy, trẫm không bắt lỗi gì đâu!\n\n– Tâu đại vương! Ngài đã phán những lời rất cao quý, rất hay, rất đúng đắn, đúng là lời của một bậc minh quân vĩ đại nhất trên thế gian. Bần tăng rất khâm phục, và bần tăng sẽ rất hoan hỷ, thoải mái để hầu chuyện với Đại vương như là một bậc Trí giả.\n\n– Vậy đại đức hãy nghe Trẫm hỏi.\n\n– Tâu, xin ngài cứ hỏi đi?\n\n– Bạch, trẫm đã hỏi xong rồi.\n\n– Thưa, bần tăng đã đáp rồi.\n\n– Đại đức đáp như thế nào?\n\n– Đại vương hỏi như thế nào?\n\nĐức vua Mi-lan-đà vì vui thích mà thử trí tuệ của đại đức Na-tiên đó thôi, các câu hỏi này chỉ lặp lại, nhưng giảng đường thì mọi người hoan hô, tán thán vang rân.\n-----\n Nghe bộ sách này cuốn từ đầu đến cuối, hai bậc trí một người hỏi rất hay, một người đáp cực logic.\nNghe mà học cách suy luận, nhiều góc nhìn và giải quyết các vấn đề trong cuộc sống thì đỉnh của đỉnh."
      ]
    }
  ]


export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (sidebar === undefined) return null;

  return (
    <ContentLayout title="Những mẩu chuyện hay sưu tầm">
      {faqs.map((faq, index) => (
       <ExpandableCard
       key={index}
       title={faq.title}
       content={faq.content}
       isOpen={openIndex === index}
       onClick={() => setOpenIndex(openIndex === index ? null : index)}
     />
      ))}
    </ContentLayout>
  );
}

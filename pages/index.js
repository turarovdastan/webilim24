import HomeLayout from "../components/HomeLayout";
import Hero from "../components/Home/hero/Hero";
import Form from "../components/Home/FormReq/Form";
import Webinar from "../components/Webinar/webinar";
import CourseList from "../components/Course/courseList";
import MasterClass from "../components/Master-Class/MasterClass";
import ArticleList from "../components/Article/articleList";
import Faq from "../components/Home/FAQ/FAQ";
import Subscribe from "../components/Home/Subscribe/subscribe";


export default function Home() {
  return (
      <HomeLayout>

          <Hero/>
          <CourseList/>
          <ArticleList/>
          <Webinar/>
          <MasterClass/>
          <Subscribe/>
          <Form/>
          <Faq/>
      </HomeLayout>

  )
}

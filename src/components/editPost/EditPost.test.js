import EditPost from "./EditPost";
import {shallow,configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("EditPost",()=>{
    it("should render properly",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<EditPost post={post} open={true} />);
        const tree=wrapper.debug();
        expect(tree).toMatchSnapshot();
    })
    it("edit post content",()=>{
        const wrapper=shallow(<EditPost />);
        const dialogeTopContentId=wrapper.find("#dialogeTop");
        expect(dialogeTopContentId.text()).toEqual("Edit Post (Fields are editable,only write in the fields you want to update)");
    })
    it("check for user name",()=>{
        const wrapper=shallow(<EditPost/>);
        const userName=wrapper.find("#userName");
        // console.log(userName.debug());
        expect(userName.text()).toEqual("Ritik Gupta");
    })
    it("check State initially when all field are empty", () => {
        const wrapper = shallow(<EditPost />);
        wrapper.setState({img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"});
        wrapper.setState({id:"1"});
        wrapper.setState({location:"noida"});
        wrapper.setState({desc:"be a good person"});
        expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
        expect(wrapper.state("location")).toEqual("noida");
        expect(wrapper.state("desc")).toEqual("be a good person");
    });
    it("should render for desc onchange",()=>{                              
        const wrapper=shallow(<EditPost/>);
        const descId=wrapper.find("#desc");
        descId.simulate("change",{target:{value:"Be a good person",name:"desc"}});
        // console.log("description1",wrapper.state("desc"));
        expect(wrapper.state("desc")).toEqual("Be a good person");
    })    
    it("should render for img onchange",()=>{                              
        const wrapper=shallow(<EditPost/>);
        wrapper.find("#img").simulate("change",{target:
            {value:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            name:"img"}
        });
        // console.log("img",wrapper.state("img"));
        expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
    })
    it("should render for location onchange",()=>{                              
        const wrapper=shallow(<EditPost/>);
        wrapper.find("#location").simulate("change",{target:{value:"Agra",name:"location"}});
        // console.log("location",wrapper.state("location"));
        expect(wrapper.state("location")).toEqual("Agra");
    })

    it("should display required text when desc field is empty",()=>{
        const wrapper=shallow(<EditPost />);
        const descId=wrapper.find("#desc");
        descId.simulate("change",{target:{value:"",name:"descS"}});
        const requiredId=wrapper.find("#requiredDesc");
        // console.log("description after simulate",wrapper.state("desc"));
        // console.log("required para",wrapper.find("#requiredDesc").text())
        expect(requiredId.text()).toEqual("*Required");
    })
    it("should display required text when location field is empty",()=>{
        const wrapper=shallow(<EditPost />);
        const locationId=wrapper.find("#location");
        locationId.simulate("change",{target:{value:"",name:"locationS"}});
        const requiredId=wrapper.find("#requiredLocation");
        expect(requiredId.text()).toEqual("*Required");
    })
    it("should display required text when imgage field is empty",()=>{
        const wrapper=shallow(<EditPost />);
        const imgId=wrapper.find("#img");
        imgId.simulate("change",{target:{value:"",name:"img"}});
        const requiredId=wrapper.find("#requiredImg");
        expect(requiredId.text()).toEqual("*Required");
    })
    it("should post button be enable when changed in any fields", () => {
        const wrapper=shallow(<EditPost/>);
        jest.spyOn(wrapper.instance(),"handleUpdateOpen")
        wrapper.setState({ 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
        });
        wrapper.find("#editPostSubmit").simulate("click");
        expect(wrapper.instance().handleUpdateOpen).toBeCalledTimes(1);
    });
})
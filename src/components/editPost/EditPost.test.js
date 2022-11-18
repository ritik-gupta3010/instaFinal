import EditPost from "./EditPost";
import {shallow,configure} from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("EditPost",()=>{
    it("should render properly",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida",
            comments: {
                "Nice Pick": "Nice Pick",
                "Wow": "Wow",
                
                
              },
        }
        const wrapper=shallow(<EditPost post={post} />);
        const tree=wrapper.debug();
        expect(tree).toMatchSnapshot();
    })
    it("edit post content",()=>{
        const wrapper=shallow(<EditPost />);
        const dialogeTopContentId=wrapper.find("#dialogeTop");
        expect(dialogeTopContentId.text()).toEqual("Edit Post");
    })
    it("check for user name",()=>{
        const wrapper=shallow(<EditPost/>);
        const userName=wrapper.find("#userName");
        // console.log(userName.debug());
        expect(userName.text()).toEqual("Ritik Gupta");
    })
    it("check State initially ", () => {
        const wrapper = shallow(<EditPost />);
        wrapper.setState({img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"});
        wrapper.setState({id:"1"});
        wrapper.setState({location:"noida"});
        wrapper.setState({desc:"be a good person"});
        expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
        expect(wrapper.state("location")).toEqual("noida");
        expect(wrapper.state("desc")).toEqual("be a good person");
    });
    it("should working for desc onchange",()=>{                              
        const wrapper=shallow(<EditPost/>);
        const descId=wrapper.find("#desc");
        descId.simulate("change",{target:{value:"Be a good person",name:"desc"}});
        // console.log("description1",wrapper.state("desc"));
        expect(wrapper.state("desc")).toEqual("Be a good person");
    })    
    it("should workin for img onchange",()=>{                              
        const wrapper=shallow(<EditPost/>);
        wrapper.find("#img").simulate("change",{target:
            {value:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            name:"imgS"}
        });
        // console.log("img",wrapper.state("img"));
        expect(wrapper.state("imgS")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
    })
    it("should working for location onchange",()=>{                              
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
    it("should display Provide https image url when imgage field is empty",()=>{
        const wrapper=shallow(<EditPost />);
        const imgId=wrapper.find("#img");
        imgId.simulate("change",{target:{value:"",name:"imgS"}});
        const requiredId=wrapper.find("#requiredImg");
        expect(requiredId.text()).toEqual("*Provide https image url");
    })
    it("should post button be enable when changed in any fields", () => {
        const wrapper=shallow(<EditPost/>);
        jest.spyOn(wrapper.instance(),"handleUpdateOpen")
        wrapper.setState({ 
            imgS: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
        });
        wrapper.find("#editPostSubmit").simulate("click");
        expect(wrapper.instance().handleUpdateOpen).toBeCalledTimes(1);
    });
    it("should post button be enable when changed in any fields and called updateData function", () => {
        const mockFn=jest.fn();
        const wrapper=shallow(<EditPost updateData={mockFn}/>);
        // wrapper.setState({ 
        //     imgS: "https://png.pngtree.com/background/20210709/original/pngtree-tanabata-valentines-day-romantic-creative-synthesis-picture-image_917725.jpg", 
        // });
        console.log(wrapper.instance())
        wrapper.find("#supportyes").simulate("click");
        expect(mockFn).toBeCalledTimes(1);
    });
})
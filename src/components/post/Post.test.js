import Post from "./Post";
import {shallow,configure} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("post",()=>{
    it("should render properly",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post} />);
        const tree=wrapper.debug();
        expect(tree).toMatchSnapshot();
    })
    it("check for user image",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const userImgId=wrapper.find("#userImg");
        expect(userImgId.props().src).toBe("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png")
    })
    it("check for location",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const locationId=wrapper.find("#location");
        expect(locationId.text()).toBe("noida");
    })
    it("check for edit button",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        jest.spyOn(wrapper.instance(),"handleClickOpenEdit")
        const editButtonId=wrapper.find("#editButton");
        // console.log(wrapper.instance())
        // console.log(editButtonId.debug())
        // console.log(wrapper.instance().handleClickOpenEdit)
        
        editButtonId.simulate("click");
        expect(wrapper.instance().handleClickOpenEdit).toBeCalledTimes(1);
    })
    it("check for delete button",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        jest.spyOn(wrapper.instance(),"handleClickOpenDelete")
        const deleteButtonId=wrapper.find("#deleteButton");
        
        deleteButtonId.simulate("click");
        expect(wrapper.instance().handleClickOpenDelete).toBeCalledTimes(1);
    })
    it("check for deleteData called or not",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const mockFn=jest.fn();
        const wrapper=shallow(<Post post={post} deleteData={mockFn}/>);
        // jest.spyOn(wrapper.instance(),"handleClickOpenDelete")
        const deleteButtonId=wrapper.find("#deleteCalled");
        
        deleteButtonId.simulate("click");
        expect(mockFn).toBeCalledTimes(1);
    })
    it("check for image",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const postImgId=wrapper.find(".postImage");
        expect(postImgId.props().src).toBe("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png")
    })
    it("check for desc",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const descId=wrapper.find("#desc");
        expect(descId.text()).toBe("be a good person");
    })
    it("chechk for like icon",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const likeId=wrapper.find("#like");
        // console.log(wrapper.instance())
        jest.spyOn(wrapper.instance(),"handleClickLike");
        likeId.simulate("click");
        expect(wrapper.instance().handleClickLike).toBeCalledTimes(1);
        wrapper.setState({styleLike: "fa fa-heart postBottomIconClick"});
        expect(wrapper.state("styleLike")).toBe("fa fa-heart postBottomIconClick");

    })
    it("chechk for save icon",()=>{
        const post={
            img:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            id:"1",
            desc:"be a good person",
            location:"noida"
        }
        const wrapper=shallow(<Post post={post}/>);
        const saveId=wrapper.find("#save");
        // console.log(wrapper.state())
        jest.spyOn(wrapper.instance(),"handleClickSave");
        saveId.simulate("click");
        expect(wrapper.instance().handleClickSave).toBeCalledTimes(1);
        wrapper.setState({styleSave: "fa fa-bookmark postBottomRight"});
        expect(wrapper.state("styleSave")).toBe("fa fa-bookmark postBottomRight");
    })
})

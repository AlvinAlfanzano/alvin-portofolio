import React, { createContext, useEffect, useState } from "react";
import Mylist from "./Mylist";
import Edit from "./Edit";
import './ItemList.css'

function ItemList() {
  const [item, setitem] = useState("");
  const [itemlist, setitemlist] = useState([]);
  const [edit, setedit] = useState("");
  const [update, setupdate] = useState(-1);

  const createItem = (e) => {
    setitem(e.target.value);
  };

  const additem = () => {
    setitemlist([...itemlist, item]);
  };
  const deleteitem = (id) => {
    setitemlist((itemlist) => {
      return itemlist.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };

  function edititem(id, data) {
    setupdate(id);
  }
  const handleupdate = (edit, id) => {
    delete itemlist[id];
    itemlist[id] = edit;
    setupdate(-1);
  };
  return (
    <div className="conItem">
        <div className="innertext">
          <h5>DevTown Bootcamp</h5>
          <h1>To Do List</h1>
          <p>On this Bootcamp, i learn React JS for the first time. but i already have knowledge on Javascript that help me a lot to complete the task.</p>
          <p>you can interact with it, go for it to add item as you want..</p>
        </div>
        <div className="innerbox">
          <div className="judul">
            <h4>List an Item</h4>
          </div>
          <div className="box1">
            <div className="inputbox">
              <input
                type="text"
                placeholder="add an item"
                onChange={createItem}
              />
            </div>
            <div className="btnbox">
              <button className="btnadd" onClick={additem} >add</button>
            </div>
          </div>
          <br />

          <div>
            {itemlist.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    {update === index ? (
                      <Edit
                        data={item}
                        edit={edit}
                        setedit={setedit}
                        id={index}
                        onUpdate={handleupdate}
                      />
                    ) : (
                      <Mylist
                        data={item}
                        id={index}
                        onSelect={deleteitem}
                        onEdit={edititem}
                      />
                    )}
                  </div>
                </>
              );
            })}
          </div>

        </div>
    </div>
  )
}

export default ItemList
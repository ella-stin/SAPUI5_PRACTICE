sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zday1304.controller.View1", {
			onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("../model/data.json");
                this.getView().setModel( oModel );
               
                // let oData = {
                //     "expanded" : true
                // };
                // let oModel2 = new JSONModel();
                // oModel2.setData( oData );
                // this.getView().setModel( oModel2 , "oModel2" );
			},
            onPressAir:function (oEvt) {
                let sPath = oEvt.getSource().getBindingContext().getPath();
                // alert(sPath);
                let oTableCon = this.byId("idTableCon");
                oTableCon.bindElement( sPath );
                // alert( sPath );
            },
            onPressCon:function (oEvt){
                let oTablePanel = this.byId("idPanel");
                let oExpanded = oTablePanel.getExpanded();
                if (!oExpanded) {
                    let sPath = oEvt.getSource().getBindingContext().getPath();
                    oTablePanel.bindElement( sPath );
                    oTablePanel.setExpanded(true);
                } else {
                    oTablePanel.setExpanded(false);
                }

                // let sPathExpandable = oEvt.getSource().getBindingContext().getPath();
                // oTablePanel.bindElement( sPathExpandable );
                                    
            },
            onSelect:function(oEvent) {
                let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                // alert(sPath);
                let oCombo = this.byId("idTableCon");
                // alert(oCombo);
                oCombo.bindElement( sPath );
                // let selectKey = oCombo.getSelectedKey();
                // alert(selectKey);
                // oCombo.bindElement( sPath );
                // alert(sPath);
            }
		});
	});

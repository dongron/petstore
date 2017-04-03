package pl.pcz.client;

import com.google.gwt.core.client.EntryPoint;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.TabLayoutPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.ui.StackLayoutPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.FlexTable;


public class petstore implements EntryPoint {


    public void onModuleLoad() {
	VerticalPanel verticalPanel = new VerticalPanel();
	Label label = new Label("Petstore");
	verticalPanel.add(label);

	HorizontalPanel hpanel1 = new HorizontalPanel();
	FlexTable ftable = new FlexTable();
	ftable.setText("lablel",0,0);
	ftable.setText("lablel",0,1);
	hpanel1.add(ftable);
	verticalPanel.add(hpanel1);


	HorizontalPanel hpanel2 = new HorizontalPanel();
	Label labelId = new Label("id");
	Label labelName = new Label("name");	
	Label labelCategory = new Label("category");
	hpanel2.add(labelId);
	hpanel2.add(labelName);
	hpanel2.add(labelCategory);
	verticalPanel.add(hpanel2);


	Label labelStopka = new Label("email: petfore@op.pl");
	verticalPanel.add(labelStopka);

	DecoratorPanel decoratorPanel = new DecoratorPanel();
	decoratorPanel.add(verticalPanel);

      // Add the widgets to the root panel.
	RootPanel.get().add(decoratorPanel);


//	StackLayoutPanel p = new StackLayoutPanel(Unit.EM);
//	p.add(new HTML("this content"), new HTML("this"), 4);
//	p.add(new HTML("that content"), new HTML("that"), 4);
//	p.add(new HTML("the other content"), new HTML("the other"), 4);
  }
}

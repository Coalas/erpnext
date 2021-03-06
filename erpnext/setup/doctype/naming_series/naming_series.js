// ERPNext - web based ERP (http://erpnext.com)
// Copyright (C) 2012 Web Notes Technologies Pvt Ltd
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Settings
cur_frm.cscript.onload = function(doc, cdt, cdn){
  var callback = function(r, rt){
    set_field_options('select_doc_for_series', r.message);
  }
  $c_obj(make_doclist(doc.doctype, doc.name),'get_transactions','',callback);
  cur_frm.cscript.refresh();
  // add page head
  //var ph = new PageHeader(cur_frm.fields_dict['head_html'].wrapper, 'Setup Series', 'Set prefix for numbering series on your transactions');
}

cur_frm.cscript.refresh = function(doc, cdt, cdn) {
  // hide buttons
  $('.appframe-toolbar').toggle(false);
}

cur_frm.cscript.select_doc_for_series = function(doc, cdt, cdn) {
  var callback = function(r, rt){
    locals[cdt][cdn].set_options = r.message;
    refresh_field('set_options');
  }

  $c_obj(make_doclist(doc.doctype, doc.name),'get_options','',callback)
}

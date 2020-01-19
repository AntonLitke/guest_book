class ClientDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      # id: { source: "User.id", cond: :eq },
      # name: { source: "User.name", cond: :like }
      user_name: {source: "Client.user_name"},
      email: {source: "Client.email"},
      created_at: {source: 'Client.created_at'}
    }
  end

  def data
    records.map do |record|
      {
          user_name:  record.user_name,
          email:      record.email,
          created_at: record.created_at.strftime("%d/%m/%Y %H:%M"),
          homepage:   record.homepage,
          message:    record.message,
          ip:         record.ip,
          browser:    record.browser,
          
      }
    end
  end

  def get_raw_records
    Client.all
  end

end

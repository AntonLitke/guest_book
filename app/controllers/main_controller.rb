class MainController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json { render json: ClientDatatable.new(params) }
    end
  end
  
  def new
  end

  def create
  p 'dsgsdgsdghsvdsfsdfsfw'  
  p params
  p Client.create! client_params
  redirect_to main_index_path


  end

  private
  def client_params
    params[:ip] = request.remote_ip
    params[:browser] = request.env['HTTP_USER_AGENT']
    params.permit(:user_name, :email, :homepage, :message, :ip, :browser)
  end
end
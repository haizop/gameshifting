# == Schema Information
#
# Table name: games
#
#  id                 :integer          not null, primary key
#  name               :string
#  description        :text
#  activated_dynamics :integer          is an Array
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'rails_helper'

RSpec.describe GamesController, type: :controller do

  describe'GET#show'do
    it "assigns the requested game to @game" do
      game = create(:game)
      get :show, id: game
      expect(assigns(:game)).to eq game
    end

    it "responds with a JSON-formatted content" do
      game = create(:game)
      get :show, id: game
      expect(response.body).to have_content game.to_json
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new game in the database"
    end

    context "with invalid attributes" do
      it "does not save the new game in the database"
    end
  end
end

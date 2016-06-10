

require 'rails_helper'

RSpec.describe Game, type: :model do
  it "has a valid factory" do
    expect(build(:game)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:name) }
  end

  describe 'association' do
    it { should have_many(:game_users).dependent(:destroy) }
    it { should have_many(:users) }
    it { should have_many(:game_shifts).dependent(:destroy) }
  end
end
